import { SearchResultItems } from "@/models";
import { getSearchResultItemsCacheTtl } from "@/utils";
import { getStocksForQuery } from "@/utils/get-stocks-for-query";
import { create } from "zustand";

interface SearchResultsCacheEntry {
  items: SearchResultItems;
  ttl: Date;
}

interface SearchResultListStore {
  query: string;
  isLoading: boolean;
  searchResultsCache: Record<string, SearchResultsCacheEntry>;
  currentSearchResultItems: SearchResultItems | undefined;
  executeSearch: () => void;
  setQuery: (query: string) => void;
}

export const useSearchResultListStore = create<SearchResultListStore>((set, get) => ({
  query: "",
  isLoading: false,
  currentSearchResultItems: undefined,
  searchResultsCache: {},
  setQuery: (query) => set(() => ({ query })),
  executeSearch: async () => {
    const { searchResultsCache, query } = get();
    set(() => ({ isLoading: true }));

    if (!query.length) {
      set(() => ({ currentSearchResultItems: undefined, isLoading: false }));
      return;
    }

    const cache = searchResultsCache[query];
    const isCacheValid = cache && cache.ttl > new Date();

    const items: SearchResultItems = isCacheValid ? cache.items : await getStocksForQuery(query);

    set(() => ({ currentSearchResultItems: items, isLoading: false }));

    if (!isCacheValid) {
      const newCacheEntry: SearchResultsCacheEntry = { ttl: getSearchResultItemsCacheTtl(), items };
      set(() => ({ searchResultsCache: { ...searchResultsCache, [query]: newCacheEntry } }));
    }
  },
}));

export const useSearchQuery = () => useSearchResultListStore((state) => state.query);

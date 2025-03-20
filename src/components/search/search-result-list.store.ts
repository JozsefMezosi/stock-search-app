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
  error: string | undefined;
}

export const useSearchResultListStore = create<SearchResultListStore>((set, get) => ({
  query: "",
  error: undefined,
  isLoading: false,
  currentSearchResultItems: undefined,
  searchResultsCache: {},
  setQuery: (query) => set(() => ({ query })),
  executeSearch: async () => {
    try {
      const { searchResultsCache, query } = get();
      set(() => ({ isLoading: true, error: undefined }));

      if (!query.length) {
        set(() => ({ currentSearchResultItems: undefined }));
        return;
      }

      const cache = searchResultsCache[query];
      const isCacheValid = cache && cache.ttl > new Date();

      const items: SearchResultItems = isCacheValid ? cache.items : await getStocksForQuery(query);

      set(() => ({ currentSearchResultItems: items }));

      if (!isCacheValid) {
        const newCacheEntry: SearchResultsCacheEntry = { ttl: getSearchResultItemsCacheTtl(), items };
        set(() => ({ searchResultsCache: { ...searchResultsCache, [query]: newCacheEntry } }));
      }
    } catch (error) {
      if (error instanceof Error) {
        set(() => ({ error: error.message }));
      }
    } finally {
      set(() => ({ isLoading: false }));
    }
  },
}));

export const useSearchQuery = () => useSearchResultListStore((state) => state.query);

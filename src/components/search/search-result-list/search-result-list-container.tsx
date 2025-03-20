import { useShallow } from "zustand/shallow";
import { useSearchResultListStore } from "../search-result-list.store";
import { PlaceholderResult } from "./placeholder-result";
import { SearchResultList } from "./search-result-list";
import { ResultsLoading } from "./results-loading";

export const SearchResultListContainer = () => {
  const { currentSearchResultItems, isLoading, error } = useSearchResultListStore(
    useShallow((store) => ({
      currentSearchResultItems: store.currentSearchResultItems,
      isLoading: store.isLoading,
      error: store.error,
    }))
  );

  if (isLoading) {
    return <ResultsLoading />;
  }
  if (error) {
    return <p className="text-center">{error}</p>;
  }

  if (!currentSearchResultItems) {
    return <PlaceholderResult />;
  }

  return <SearchResultList />;
};

import { useShallow } from "zustand/shallow";
import { useSearchResultListStore } from "../search-result-list.store";
import { PlaceholderResult } from "./placeholder-result";
import { SearchResultList } from "./search-result-list";
import { ResultsLoading } from "./results-loading";

export const SearchResultListContainer = () => {
  const { currentSearchResultItems, isLoading } = useSearchResultListStore(
    useShallow((store) => ({ currentSearchResultItems: store.currentSearchResultItems, isLoading: store.isLoading }))
  );

  if (isLoading) {
    return <ResultsLoading />;
  }

  if (!currentSearchResultItems) {
    return <PlaceholderResult />;
  }

  return <SearchResultList />;
};

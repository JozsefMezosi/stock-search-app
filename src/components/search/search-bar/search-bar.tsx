import { ChangeEvent, useCallback } from "react";
import { useSearchResultListStore } from "../search-result-list.store";
import { useShallow } from "zustand/shallow";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchBar = () => {
  const { executeSearch, setQuery, query } = useSearchResultListStore(
    useShallow((store) => ({ executeSearch: store.executeSearch, setQuery: store.setQuery, query: store.query }))
  );

  const debouncedExecuteSearch = useDebounce(executeSearch);
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
      debouncedExecuteSearch();
    },
    [setQuery, debouncedExecuteSearch]
  );

  return (
    <div className="flex flex-col min-md:flex-row gap-8 w-full">
      <input
        type="text"
        value={query}
        onChange={onChange}
        name="query"
        placeholder="Start typing your search..."
        className="border border-gray-400 px-2 py-3 rounded-lg grow"
      />
    </div>
  );
};

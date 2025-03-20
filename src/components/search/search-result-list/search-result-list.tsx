import { useSearchResultListStore } from "../search-result-list.store";
import { NoSearchResultFound } from "./no-search-result-found";
import { SearchResultItemComponent } from "./search-result-item";

export const SearchResultList = () => {
  const searchResultItems = useSearchResultListStore((state) => state.currentSearchResultItems);

  if (!searchResultItems?.length) {
    return <NoSearchResultFound />;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 border-b border-gray-300 p-2 child [&>*]:text-center [&>*]:font-semibold [&>:not(:last-child)]:border-r [&>:not(:last-child)]:border-gray-300">
        <h2>Name</h2>
        <h2>Symbol</h2>
        <h2>Actions</h2>
      </div>
      <div className="[&>:not(:last-child)]:border-b [&>:not(:last-child)]:border-gray-300 ">
        {searchResultItems.map((item) => (
          <SearchResultItemComponent {...item} key={item.symbol} />
        ))}
      </div>
    </div>
  );
};

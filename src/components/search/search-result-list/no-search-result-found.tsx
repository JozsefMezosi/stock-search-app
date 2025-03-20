import { useSearchQuery } from "../search-result-list.store";

export const NoSearchResultFound = () => {
  const query = useSearchQuery();
  return <p className="text-center p-8">No result found for &quot;{query}&quot;</p>;
};

import { QUERY_PARAM } from "@/constants/api-request.constants";
import { SearchResultItems } from "@/models";

export const getStocksForQuery = async (query: string) => {
  const res = await fetch(`/api/search?${QUERY_PARAM}=${query}`);
  return (await res.json()) as SearchResultItems;
};

import { QUERY_PARAM } from "@/constants/api-request.constants";
import { HTTP_STATUS_CODES, SearchResultItems } from "@/models";

export const getStocksForQuery = async (query: string) => {
  const res = await fetch(`/api/search?${QUERY_PARAM}=${query}`);
  const data = await res.json();
  if (res.status !== HTTP_STATUS_CODES.OK) {
    throw new Error(data);
  }

  return data as SearchResultItems;
};

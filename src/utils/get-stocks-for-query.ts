import { QUERY_PARAM } from "@/constants/api-request.constants";
import { ONE_HOUR_IN_SECONDS } from "@/constants/time.constants";
import { HTTP_STATUS_CODES, SearchResultItems } from "@/models";

export const getStocksForQuery = async (query: string) => {
  const res = await fetch(`/api/search?${QUERY_PARAM}=${query}`, { next: { revalidate: ONE_HOUR_IN_SECONDS } });
  const data = await res.json();
  if (res.status !== HTTP_STATUS_CODES.OK) {
    throw new Error(data);
  }

  return data as SearchResultItems;
};

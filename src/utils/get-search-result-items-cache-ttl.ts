import { ONE_HOUR_IN_MS } from "@/constants/time.constants";

export const getSearchResultItemsCacheTtl = (): Date => {
  const now = new Date();
  now.setTime(now.getTime() + ONE_HOUR_IN_MS);
  return now;
};

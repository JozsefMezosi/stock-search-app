const ONE_HOUR_IN_MS = 3600000;
export const getSearchResultItemsCacheTtl = (): Date => {
  const now = new Date();
  now.setTime(now.getTime() + ONE_HOUR_IN_MS);
  return now;
};

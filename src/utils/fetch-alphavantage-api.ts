import { ONE_HOUR_IN_SECONDS } from "@/constants/time.constants";
import { type AlphavantageApiFunctions } from "@/models";

type FetchAlphavantageApiParams =
  | {
      function: typeof AlphavantageApiFunctions.SYMBOL_SEARCH;
      keywords: string;
    }
  | {
      function: Exclude<AlphavantageApiFunctions, typeof AlphavantageApiFunctions.SYMBOL_SEARCH>;
      symbol: string;
    };

export const fetchAlphavantageApi = (params: FetchAlphavantageApiParams) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("Alphavantage api key missing!");
  }

  const queryParams = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return fetch(`https://www.alphavantage.co/query?${queryParams}&apikey=${apiKey}`, {
    next: { revalidate: ONE_HOUR_IN_SECONDS },
  });
};

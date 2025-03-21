"use server";
import { ONE_HOUR_IN_SECONDS } from "@/constants/time.constants";
import { type AlphavantageApiFunctions } from "@/models";
import { createClient } from "redis";

type FetchAlphavantageApiParams =
  | {
      function: typeof AlphavantageApiFunctions.SYMBOL_SEARCH;
      keywords: string;
    }
  | {
      function: Exclude<AlphavantageApiFunctions, typeof AlphavantageApiFunctions.SYMBOL_SEARCH>;
      symbol: string;
    };

const redis = await createClient({ url: process.env.REDIS_URL }).connect();

export const fetchAlphavantageApi = async (params: FetchAlphavantageApiParams) => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("Alphavantage api key missing!");
  }

  const queryParams = Object.entries(params)
    .sort(([key1], [key2]) => key1.localeCompare(key2))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const cachedResult = await redis.get(queryParams);

  if (cachedResult) {
    return JSON.parse(cachedResult);
  }

  const promise = await fetch(`https://www.alphavantage.co/query?${queryParams}&apikey=${apiKey}`, {
    cache: "force-cache",
    next: { revalidate: ONE_HOUR_IN_SECONDS },
  });

  const data = await promise.json();
  if (!data.hasOwnProperty("Information")) {
    redis.set(queryParams, JSON.stringify(data), { EX: ONE_HOUR_IN_SECONDS });
  }

  return data;
};

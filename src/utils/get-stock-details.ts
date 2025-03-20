import { GLOBAL_QUOTE_KEY, MONTHLY_PRICE_KEY } from "@/constants/api-request.constants";
import { ONE_HOUR_IN_SECONDS } from "@/constants/time.constants";
import { StockData, StockPriceDataMap } from "@/models";

export const getStockDetails = async (symbol: string) => {
  const apiKey = process.env.API_KEY;

  const stockDataPromise = fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`,
    { next: { revalidate: ONE_HOUR_IN_SECONDS } }
  );

  const stockPriceMonthlyPromise = fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`,
    { next: { revalidate: ONE_HOUR_IN_SECONDS } }
  );

  const [stockDataResponse, stockPriceMonthlyResponse] = await Promise.all([
    stockDataPromise,
    stockPriceMonthlyPromise,
  ]);

  const stockData = (await stockDataResponse.json())[GLOBAL_QUOTE_KEY] as StockData;
  const stockPriceMonthlyData = (await stockPriceMonthlyResponse.json())[MONTHLY_PRICE_KEY] as StockPriceDataMap;
  return { stockData, stockPriceMonthlyData };
};

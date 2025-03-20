import { GLOBAL_QUOTE_KEY, MONTHLY_PRICE_KEY } from "@/constants/api-request.constants";
import { StockData, StockPriceDataMap } from "@/models";
import { fetchAlphavantageApi } from "./fetch-alphavantage-api";
import { AlphavantageApiFunctions } from "@/models";

export const getStockDetails = async (symbol: string) => {
  const stockDataPromise = fetchAlphavantageApi({
    function: AlphavantageApiFunctions.GLOBAL_QUOTE,
    symbol,
  });

  const stockPriceMonthlyPromise = fetchAlphavantageApi({
    function: AlphavantageApiFunctions.TIME_SERIES_MONTHLY,
    symbol,
  });

  const [stockDataResponse, stockPriceMonthlyResponse] = await Promise.all([
    stockDataPromise,
    stockPriceMonthlyPromise,
  ]);

  const stockData = (await stockDataResponse.json())[GLOBAL_QUOTE_KEY] as StockData;
  const stockPriceMonthlyData = (await stockPriceMonthlyResponse.json())[MONTHLY_PRICE_KEY] as StockPriceDataMap;
  return { stockData, stockPriceMonthlyData };
};

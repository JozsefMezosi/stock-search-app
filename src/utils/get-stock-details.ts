import { GLOBAL_QUOTE_KEY, MONTHLY_PRICE_KEY } from "@/constants/api-request.constants";
import { StockData, StockPriceDataMap } from "@/models";
import { fetchAlphavantageApi } from "./fetch-alphavantage-api";
import { AlphavantageApiFunctions } from "@/models";
import { getStockNameFromBestMatches } from "./get-stock-name-from-best-matches";

export const getStockDetails = async (symbol: string) => {
  const stockDataPromise = fetchAlphavantageApi({
    function: AlphavantageApiFunctions.GLOBAL_QUOTE,
    symbol,
  });

  const stockPriceMonthlyPromise = fetchAlphavantageApi({
    function: AlphavantageApiFunctions.TIME_SERIES_MONTHLY,
    symbol,
  });

  const stockSearchPromise = fetchAlphavantageApi({
    function: AlphavantageApiFunctions.SYMBOL_SEARCH,
    keywords: symbol,
  });

  const [stockDataResponse, stockPriceMonthlyResponse, stockSearchDataResponse] = await Promise.all([
    stockDataPromise,
    stockPriceMonthlyPromise,
    stockSearchPromise,
  ]);

  const stockData = stockDataResponse[GLOBAL_QUOTE_KEY] as StockData | undefined;
  const stockPriceMonthlyData = stockPriceMonthlyResponse[MONTHLY_PRICE_KEY] as StockPriceDataMap | undefined;

  const stockName = getStockNameFromBestMatches(stockSearchDataResponse.bestMatches, symbol);

  return { stockData, stockPriceMonthlyData, stockName };
};

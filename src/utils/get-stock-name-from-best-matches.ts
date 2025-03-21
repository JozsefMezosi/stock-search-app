import { StockSearchData } from "@/models";

export const getStockNameFromBestMatches = (
  bestMatches: StockSearchData[] | undefined,
  symbol: string
): string | undefined => bestMatches?.find((stock) => stock["1. symbol"] === symbol)?.["2. name"];

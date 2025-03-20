import { KeysMap } from "./keys-map.model";

export type AlphavantageApiFunctions = "GLOBAL_QUOTE" | "TIME_SERIES_MONTHLY" | "SYMBOL_SEARCH";

export const AlphavantageApiFunctions: KeysMap<AlphavantageApiFunctions> = {
  GLOBAL_QUOTE: "GLOBAL_QUOTE",
  SYMBOL_SEARCH: "SYMBOL_SEARCH",
  TIME_SERIES_MONTHLY: "TIME_SERIES_MONTHLY",
} as const;

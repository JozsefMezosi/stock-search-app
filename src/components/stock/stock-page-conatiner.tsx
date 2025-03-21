import { StockData, StockPriceDataMap } from "@/models";
import { FunctionComponent } from "react";
import { StockPriceCard } from "./stock-price-card";
import { StockPriceComparisonCard } from "./stock-price-comparison-card";
import { StockVolumeAndChangeCard } from "./stock-volume-and-change-card";
import { FavoriteButton } from "../favorites/favorite-button";
import { StockPriceOverTimeChart } from "./stock-price-over-time-chart";

interface StockPageContainerProps {
  stockData: StockData;
  stockPriceData: StockPriceDataMap;
  stockName: string;
}

export const StockPageContainer: FunctionComponent<StockPageContainerProps> = ({
  stockData,
  stockPriceData,
  stockName,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-3">
        <div>
          <div className="flex gap-2">
            <h1 className="text-3xl font-bold">{stockData["01. symbol"]}</h1>
            <FavoriteButton stockSymbol={stockData["01. symbol"]} />
          </div>
          <h2 className="text-gray-500">{stockName}</h2>
          <p className="text-gray-500">Last updated: {stockData["07. latest trading day"]}</p>
        </div>
        <span className="text-3xl font-bold">${stockData["05. price"]}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <StockPriceCard {...stockData} />
        <StockVolumeAndChangeCard {...stockData} />
      </div>
      <StockPriceComparisonCard {...stockData} />
      <StockPriceOverTimeChart stockPriceData={stockPriceData} />
    </div>
  );
};

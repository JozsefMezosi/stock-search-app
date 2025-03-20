import { StockData } from "@/models";
import { FunctionComponent } from "react";
import { StockPriceCard } from "./stock-price-card";
import { StockPriceComparisonCard } from "./stock-price-comparison-card";
import { StockVolumeAndChangeCard } from "./stock-volume-and-change-card";

export const StockPageContainer: FunctionComponent<StockData> = (data) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-3">
        <div>
          <h1 className="text-3xl font-bold">{data["01. symbol"]}</h1>
          <p className="text-gray-500">Last updated: {data["07. latest trading day"]}</p>
        </div>
        <span className="text-3xl font-bold">${data["05. price"]}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <StockPriceCard {...data} />
        <StockVolumeAndChangeCard {...data} />
      </div>
      <StockPriceComparisonCard {...data} />
    </div>
  );
};

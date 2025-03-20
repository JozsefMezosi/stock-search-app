import { StockData } from "@/models";
import { FunctionComponent } from "react";
import { Card } from "../card/card";
import { CardHeader } from "../card/card-header";
import { CardBody } from "../card/card-body";

export const StockPriceComparisonCard: FunctionComponent<StockData> = (data) => {
  const low = parseFloat(data["04. low"]);
  const high = parseFloat(data["03. high"]);
  const current = parseFloat(data["05. price"]);
  const percentage = low === high ? 100 : ((current - low) / (high - low)) * 100;

  return (
    <div className="mt-6">
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium">Price Comparison</h2>
          <p className="text-sm text-gray-500">Current price compared to daily range</p>
        </CardHeader>
        <CardBody>
          <div className="pt-1">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-xs font-semibold text-gray-500">Low: ${data["04. low"]}</span>
              <span className="text-xs font-semibold text-gray-500">High: ${data["03. high"]}</span>
            </div>
            <div className="h-2 mb-4 flex rounded bg-gray-200">
              <div style={{ width: `${percentage}%` }} className="bg-blue-500 rounded" />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

import { StockData } from "@/models";
import { CurrencyDollarIcon } from "@heroicons/react/16/solid";
import { FunctionComponent } from "react";
import { CardHeader } from "../card/card-header";
import { Card } from "../card/card";
import { CardBody } from "../card/card-body";

export const StockPriceCard: FunctionComponent<StockData> = (data) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-medium flex items-center">
          <CurrencyDollarIcon className="h-5 w-5 mr-2" />
          Price Information
        </h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Open</p>
            <p className="text-lg font-medium">${data["02. open"]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Previous Close</p>
            <p className="text-lg font-medium">${data["08. previous close"]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">High</p>
            <p className="text-lg font-medium">${data["03. high"]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Low</p>
            <p className="text-lg font-medium">${data["04. low"]}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

import { StockData } from "@/models";
import { ArrowTrendingUpIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/16/solid";
import { FunctionComponent } from "react";
import { Card } from "../card/card";
import { CardHeader } from "../card/card-header";
import { CardBody } from "../card/card-body";

export const StockVolumeAndChangeCard: FunctionComponent<StockData> = (data) => {
  const isPositiveChange = parseFloat(data["09. change"]) >= 0;
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-medium flex items-center">
          <ArrowTrendingUpIcon className="h-5 w-5 mr-2" />
          Trading Information
        </h2>
      </CardHeader>
      <CardBody>
        <div className="grid gap-4">
          <div>
            <p className="text-sm text-gray-500">Volume</p>
            <p className="text-lg font-medium">{Number.parseInt(data["06. volume"]).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Change</p>
            <div className={`flex items-center ${isPositiveChange ? "text-green-600" : "text-red-600"}`}>
              {isPositiveChange ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
              <p className="text-lg font-medium">
                ${data["09. change"]} (${data["10. change percent"]})
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

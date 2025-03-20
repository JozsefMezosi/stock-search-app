"use client";
import { StockPriceDataMap } from "@/models";
import { FunctionComponent, useMemo } from "react";
import { Card } from "../card/card";
import { CardHeader } from "../card/card-header";
import { CurrencyDollarIcon } from "@heroicons/react/16/solid";
import { CardBody } from "../card/card-body";
import { Chart } from "react-charts";
import { createPriceChartAxes } from "@/utils";
import { ChartSeries } from "@/models";

interface StockPriceOverTimeChartProps {
  stockPriceData: StockPriceDataMap;
}

export const StockPriceOverTimeChart: FunctionComponent<StockPriceOverTimeChartProps> = ({ stockPriceData }) => {
  const data: ChartSeries[] = useMemo(
    () => [
      {
        label: "Price",
        data: Object.entries(stockPriceData).map(([date, stockData]) => ({
          date: new Date(date),
          price: parseFloat(stockData["4. close"]),
        })),
      },
    ],
    [stockPriceData]
  );

  const { primaryAxis, secondaryAxes } = createPriceChartAxes();

  return (
    <div className="mt-6">
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium flex items-center">
            <CurrencyDollarIcon className="h-5 w-5 mr-2" />
            Price Over Time
          </h2>
        </CardHeader>
        <CardBody>
          <div className="h-92">
            <Chart
              options={{
                data,
                primaryAxis,
                secondaryAxes,
              }}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

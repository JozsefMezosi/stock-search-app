import { ChartEntry } from "@/models";
import { AxisOptions } from "react-charts";

export const createPriceChartAxes = (): {
  primaryAxis: AxisOptions<ChartEntry>;
  secondaryAxes: AxisOptions<ChartEntry>[];
} => ({
  primaryAxis: {
    getValue: (entry) => entry.date,
  },
  secondaryAxes: [
    {
      getValue: (datum) => datum.price,
    },
  ],
});

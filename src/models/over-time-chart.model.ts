export type ChartEntry = { date: Date; price: number };

export type ChartSeries = {
  label: string;
  data: ChartEntry[];
};

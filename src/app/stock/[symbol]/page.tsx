import { StockPageContainer } from "@/components/stock/stock-page-conatiner";
import { getStockDetails } from "@/utils/get-stock-details";

interface StockPageParams {
  params: Promise<{ symbol: string }>;
}

export default async function Page({ params }: StockPageParams) {
  const { symbol } = await params;

  const { stockData, stockPriceMonthlyData } = await getStockDetails(symbol);

  if (!stockData || !stockPriceMonthlyData) {
    return <h1 className="text-center text-2xl">Something went wrong, please try again later.</h1>;
  }

  return (
    <div className="m-auto">
      <StockPageContainer stockData={stockData} stockPriceData={stockPriceMonthlyData} />
    </div>
  );
}

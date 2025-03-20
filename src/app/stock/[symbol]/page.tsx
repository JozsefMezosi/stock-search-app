import { StockPageContainer } from "@/components/stock/stock-page-conatiner";
import { StockData } from "@/models";

interface StockPageParams {
  params: Promise<{ symbol: string }>;
}

const GLOBAL_QUOTE_KEY = "Global Quote";

export default async function Page({ params }: StockPageParams) {
  const { symbol } = await params;

  const res = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.API_KEY}`
  );

  const data = (await res.json())[GLOBAL_QUOTE_KEY] as StockData;
  if (!data) {
    return <h1 className="text-center text-2xl">Something went wrong, please try again later.</h1>;
  }

  return (
    <div className="m-auto">
      <StockPageContainer {...data} />
    </div>
  );
}

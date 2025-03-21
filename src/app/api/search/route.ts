import { QUERY_PARAM } from "@/constants/api-request.constants";
import { AlphavantageApiFunctions, HTTP_STATUS_CODES, StockSearchData } from "@/models";
import { type NextRequest, NextResponse } from "next/server";
import { fetchAlphavantageApi } from "@/utils";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get(QUERY_PARAM);

  if (!query) {
    return NextResponse.json("Please provide the query.", {
      status: HTTP_STATUS_CODES["Bad Request"],
    });
  }

  try {
    const { bestMatches, ...restOfResponse } = await fetchAlphavantageApi({
      function: AlphavantageApiFunctions.SYMBOL_SEARCH,
      keywords: query,
    });

    if (!bestMatches) {
      throw new Error(JSON.stringify(restOfResponse));
    }

    return NextResponse.json(
      bestMatches.map((stock: StockSearchData) => ({ name: stock["2. name"], symbol: stock["1. symbol"] })),
      { status: HTTP_STATUS_CODES.OK }
    );
  } catch (error) {
    console.error("Something went wrong, error", error);
    return NextResponse.json("Something went wrong, try again later.", {
      status: HTTP_STATUS_CODES["Internal Server Error"],
    });
  }
}

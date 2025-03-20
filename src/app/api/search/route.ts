import { NAME_KEY, SYMBOL_KEY } from "@/constants/api-response.constants";
import { QUERY_PARAM } from "@/constants/api-request.constants";
import { AlphavantageApiFunctions, HTTP_STATUS_CODES } from "@/models";
import { type NextRequest, NextResponse } from "next/server";
import { fetchAlphavantageApi } from "@/utils/fetch-alphavantage-api";

type Stock = Record<string, string>;

export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get(QUERY_PARAM);

  if (!query) {
    return NextResponse.json("Please provide the query.", {
      status: HTTP_STATUS_CODES["Bad Request"],
    });
  }

  try {
    const res = await fetchAlphavantageApi({
      function: AlphavantageApiFunctions.SYMBOL_SEARCH,
      keywords: query,
    });

    const { bestMatches, ...restOfResponse } = await res.json();

    if (!bestMatches) {
      throw new Error(JSON.stringify(restOfResponse));
    }

    return NextResponse.json(
      bestMatches.map((stock: Stock) => ({ name: stock[NAME_KEY], symbol: stock[SYMBOL_KEY] })),
      { status: HTTP_STATUS_CODES.OK }
    );
  } catch (error) {
    console.error("Something went wrong, error", error);
    return NextResponse.json("Something went wrong, try again later.", {
      status: HTTP_STATUS_CODES["Internal Server Error"],
    });
  }
}

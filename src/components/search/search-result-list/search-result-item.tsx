import { FavoriteButton } from "@/components/favorites/favorite-button";
import { ViewStockDetailsButton } from "@/components/stock/view-stock-details-button";
import { SearchResultItem } from "@/models";
import { FunctionComponent } from "react";

export const SearchResultItemComponent: FunctionComponent<SearchResultItem> = ({ name, symbol }) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-2 child [&>*]:text-center [&>:not(:last-child)]:border-r [&>:not(:last-child)]:border-gray-300">
      <p>{name}</p>
      <p>{symbol}</p>
      <div className="flex gap-2 justify-center items-center">
        <ViewStockDetailsButton stockSymbol={symbol} />
        <FavoriteButton stockSymbol={symbol} />
      </div>
    </div>
  );
};

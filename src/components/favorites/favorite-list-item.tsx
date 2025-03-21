import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunctionComponent } from "react";
import { useFavoritesStore } from "./favorites.store";
import { Tooltip } from "react-tooltip";
import { ViewStockDetailsButton } from "../stock/view-stock-details-button";

interface FavoriteListItemProps {
  stockSymbol: string;
}

const REMOVE_FAVORITE_TOOLTIP_ID = "remove-favorite";
export const FavoriteListItem: FunctionComponent<FavoriteListItemProps> = ({ stockSymbol }) => {
  const removeFavorite = useFavoritesStore((store) => store.removeFavorite);

  return (
    <div className="py-3 flex justify-between items-center">
      <p>{stockSymbol}</p>
      <div className="flex gap-2">
        <ViewStockDetailsButton stockSymbol={stockSymbol} />
        <button onClick={() => removeFavorite(stockSymbol)} data-tooltip-id={REMOVE_FAVORITE_TOOLTIP_ID}>
          <XMarkIcon className="w-6 cursor-pointer" />
        </button>
        <Tooltip id={REMOVE_FAVORITE_TOOLTIP_ID} content="Remove from favorites" />
      </div>
    </div>
  );
};

import { EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useFavoritesStore } from "./favorites.store";

interface FavoriteListItemProps {
  stockSymbol: string;
}
export const FavoriteListItem: FunctionComponent<FavoriteListItemProps> = ({ stockSymbol }) => {
  const removeFavorite = useFavoritesStore((store) => store.removeFavorite);

  return (
    <div className="py-3 flex justify-between items-center">
      <p>{stockSymbol}</p>
      <div className="flex gap-2">
        <Link href={`/stock/${stockSymbol}`} className="underline flex gap-3 justify-center">
          <EyeIcon className="size-6 text-gray-500" />
        </Link>
        <button onClick={() => removeFavorite(stockSymbol)}>
          <XMarkIcon className="w-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

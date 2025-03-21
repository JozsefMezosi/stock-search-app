"use client";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconFilled } from "@heroicons/react/24/solid";
import { FunctionComponent } from "react";
import { useFavoritesStore } from "./favorites.store";
import { useShallow } from "zustand/shallow";
import { Tooltip } from "react-tooltip";

interface FavoriteButtonProps {
  stockSymbol: string;
}

const REMOVE_FAVORITE_TOOLTIP_ID = "remove-favorite";
const ADD_FAVORITE_TOOLTIP_ID = "add-favorite";

export const FavoriteButton: FunctionComponent<FavoriteButtonProps> = ({ stockSymbol }) => {
  const { addFavorite, favorites, removeFavorite } = useFavoritesStore(
    useShallow((store) => ({
      favorites: store.favorites,
      addFavorite: store.addFavorite,
      removeFavorite: store.removeFavorite,
    }))
  );

  if (favorites[stockSymbol]) {
    return (
      <>
        <StarIconFilled
          data-tooltip-id={REMOVE_FAVORITE_TOOLTIP_ID}
          className="w-7 cursor-pointer fill-amber-200 stroke-amber-400 hover:fill-white"
          onClick={() => removeFavorite(stockSymbol)}
        />
        <Tooltip id={REMOVE_FAVORITE_TOOLTIP_ID} content="Remove stock from favorites" />
      </>
    );
  }

  return (
    <>
      <StarIcon
        data-tooltip-id={ADD_FAVORITE_TOOLTIP_ID}
        className="w-7 cursor-pointer hover:fill-amber-200 hover:stroke-amber-400"
        onClick={() => addFavorite(stockSymbol)}
      />
      <Tooltip id={ADD_FAVORITE_TOOLTIP_ID} content="Add stock to favorites" />
    </>
  );
};

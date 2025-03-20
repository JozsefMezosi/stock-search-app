"use client";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconFilled } from "@heroicons/react/24/solid";
import { FunctionComponent } from "react";
import { useFavoritesStore } from "./favorites.store";
import { useShallow } from "zustand/shallow";

interface FavoriteButtonProps {
  stockSymbol: string;
}

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
      <StarIconFilled
        className="w-7 cursor-pointer fill-amber-200 stroke-amber-400 hover:fill-white"
        onClick={() => removeFavorite(stockSymbol)}
      />
    );
  }

  return (
    <StarIcon
      className="w-7 cursor-pointer hover:fill-amber-200 hover:stroke-amber-400"
      onClick={() => addFavorite(stockSymbol)}
    />
  );
};

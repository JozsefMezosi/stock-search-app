"use client";

import { useFavoritesStore } from "./favorites.store";
import { useMemo, useState } from "react";
import { FavoriteListItem } from "./favorite-list-item";

export const FavoriteList = () => {
  const [query, setQuery] = useState("");

  const favorites = useFavoritesStore((store) => store.favorites);

  const filteredFavorites = useMemo(() => {
    const favoriteStockNames = Object.keys(favorites);
    if (!query.length) {
      return favoriteStockNames;
    }

    return favoriteStockNames.filter((stockSymbol) => stockSymbol.toLowerCase().includes(query.toLocaleLowerCase()));
  }, [favorites, query]);

  return (
    <div>
      <div className="flex justify-between items-end border-b border-gray-400 pb-3">
        <p className="pr-4">Stock</p>
        <input
          type="text"
          className="border border-gray-500 py-1 rounded px-3 w-full max-w-72"
          placeholder="Start typing to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="[&>:not(:last-child)]:border-b [&>:not(:last-child)]:border-gray-300">
        {filteredFavorites.map((stockSymbol) => (
          <FavoriteListItem stockSymbol={stockSymbol} key={stockSymbol} />
        ))}
      </div>
    </div>
  );
};

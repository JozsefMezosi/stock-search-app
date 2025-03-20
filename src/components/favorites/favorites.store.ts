import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesStore {
  favorites: Record<string, true>;
  addFavorite: (stockSymbol: string) => void;
  removeFavorite: (stockSymbol: string) => void;
}

export const useFavoritesStore = create(
  persist<FavoritesStore>(
    (set) => ({
      favorites: {},
      addFavorite: (stockSymbol) => set((state) => ({ favorites: { ...state.favorites, [stockSymbol]: true } })),
      removeFavorite: (stockSymbol) =>
        set((state) => {
          const newFavorites = { ...state.favorites };
          delete newFavorites[stockSymbol];
          return { favorites: newFavorites };
        }),
    }),
    { name: "stock-search-app-favorites" }
  )
);

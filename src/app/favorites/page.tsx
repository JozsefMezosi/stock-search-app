import { FavoriteList } from "@/components/favorites/favorite-list";

export default async function Page() {
  return (
    <div className="m-auto w-[70%]">
      <h1 className="font-black text-2xl mb-10 text-center">Favorites</h1>
      <FavoriteList />
    </div>
  );
}

import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="p-5 border-b border-gray-400 flex gap-5 items-end">
      <Link href="/" className="font-semibold text-lg">
        <h1>Stock Search App</h1>
      </Link>
      <Link href="/favorites">
        <h1>Favorites</h1>
      </Link>
    </header>
  );
};

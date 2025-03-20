import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="p-5 border-b border-gray-400">
      <Link href="/" className="font-semibold">
        <h1> Stock Search App</h1>
      </Link>
    </header>
  );
};

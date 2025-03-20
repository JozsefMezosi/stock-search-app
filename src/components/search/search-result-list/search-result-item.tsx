import { SearchResultItem } from "@/models";
import { EyeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { FunctionComponent } from "react";

export const SearchResultItemComponent: FunctionComponent<SearchResultItem> = ({ name, symbol }) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-2 child [&>*]:text-center [&>:not(:last-child)]:border-r [&>:not(:last-child)]:border-gray-300">
      <p>{name}</p>
      <p>{symbol}</p>
      <Link href={`/stock/${symbol}`} className="underline flex gap-3 justify-center">
        <EyeIcon className="size-6 text-gray-500" />
      </Link>
    </div>
  );
};

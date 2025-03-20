"use client";
import { SearchBar } from "./search-bar/search-bar";
import { SearchResultListContainer } from "./search-result-list/search-result-list-container";

export const SearchPageContainer = () => {
  return (
    <div className="w-[90%] min-md:w-[70%] grid gap-5 ">
      <SearchBar />
      <SearchResultListContainer />
    </div>
  );
};

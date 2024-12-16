"use client";
import { useState } from "react";
import { SearchMenufacturer } from "./";

const SearchBar = () => {
  const [menufacturer, setMenufacturer] = useState("");
  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <SearchMenufacturer
          menufacturer={menufacturer}
          setMenufacturer={setMenufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;

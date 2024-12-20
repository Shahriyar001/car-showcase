"use client";
import { useState } from "react";
import { SearchMenufacturer } from "./";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}></button>;
};

const SearchBar = () => {
  const [menufacturer, setMenufacturer] = useState("");
  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <SearchMenufacturer
          menufacturer={menufacturer}
          setMenufacturer={setMenufacturer}
        />
        <SearchButton otherClasses="sm:hidden">
          <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain"
          />
        </SearchButton>
      </div>
    </form>
  );
};

export default SearchBar;

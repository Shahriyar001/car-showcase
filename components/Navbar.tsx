import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { GiAutoRepair } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] mx-auto flex justify-between items-center
      sm:px-16 px-6 py-4
      "
      >
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center">
          <ul className="flex items-center gap-2">
            <li className="border border-blue-50 px-4 py-2 rounded-full">
              <Link href="/" className="flex items-center gap-1 text-lg">
                <GiAutoRepair />
                <p className="hidden md:block lg:block">Repair</p>
              </Link>
            </li>
            <li className="border border-blue-50 px-4 py-2 rounded-full">
              <Link href="/" className="flex items-center gap-1 text-xl">
                <GiAutoRepair />
                <p className="hidden md:block lg:block">About</p>
              </Link>
            </li>
            <li className="border border-blue-50 px-4 py-2 rounded-full">
              <Link href="/" className="flex items-center gap-1 text-xl">
                <GiAutoRepair />
                <p className="hidden md:block lg:block">Repair</p>
              </Link>
            </li>
          </ul>
        </div>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "
        ></CustomButton>
      </nav>
    </header>
  );
};

export default Navbar;

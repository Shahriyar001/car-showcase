"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { GiAutoRepair } from "react-icons/gi";
import { signOut, useSession } from "next-auth/react";
import { VscSignOut } from "react-icons/vsc";

const Navbar = () => {
  const session = useSession();
  console.log(session);

  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] mx-auto flex justify-between items-center
      sm:px-16 px-6 py-4
      "
      >
        <Link
          href="/"
          className="flex justify-center items-center bg-white px-6 py-4 rounded-full"
        >
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
            <li className="border bg-slate-100 border-blue-50 px-4 py-2 rounded-full">
              <Link href="/repair" className="flex items-center gap-1 text-lg">
                <GiAutoRepair />
                <p className="hidden md:block lg:block">Repair</p>
              </Link>
            </li>
            <li className="border bg-slate-100 border-blue-50 px-4 py-2 rounded-full">
              <Link href="/" className="flex items-center gap-1 text-xl">
                <GiAutoRepair />
                <p className="hidden md:block lg:block">About</p>
              </Link>
            </li>
            <li className="border bg-slate-100 border-blue-50 px-4 py-2 rounded-full">
              <Link href="/" className="flex items-center gap-1 text-xl">
                <GiAutoRepair />
                <p className="hidden md:block lg:block">About</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-1">
          {!session.data ? (
            <Link href="login">
              <CustomButton
                title="Login"
                btnType="button"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "
              ></CustomButton>
            </Link>
          ) : (
            <button
              className="border bg-slate-100 border-blue-50text-xl px-4 flex items-center text-xl gap-1 py-2 rounded-full "
              onClick={() => signOut()}
            >
              <VscSignOut />
              <p className="hidden md:block lg:block">Logout</p>
            </button>
          )}
        </div>

        {/* <Link href="signup">
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "
          ></CustomButton>
        </Link> */}
      </nav>
    </header>
  );
};

export default Navbar;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import CustomButton from "./CustomButton";
// import { GiAutoRepair } from "react-icons/gi";
// import { signOut, useSession } from "next-auth/react";
// import { VscSignOut } from "react-icons/vsc";
// import { MdLibraryBooks } from "react-icons/md";
// import { IoLogoModelS } from "react-icons/io";

// const Navbar = () => {
//   const session = useSession();
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const toggleDropdown = (): void => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <header className="w-full absolute z-10">
//       <nav
//         className="max-w-[1440px] mx-auto flex justify-between items-center
//       sm:px-16 px-6 py-4
//       "
//       >
//         <Link
//           href="/"
//           className="flex justify-center items-center bg-white px-6 py-4 rounded-full"
//         >
//           <Image
//             src="/logo.svg"
//             alt="Car Hub Logo"
//             width={118}
//             height={18}
//             className="object-contain"
//           />
//         </Link>
//         <div className="flex items-center">
//           <ul className="flex items-center gap-2 ">
//             <li className="border bg-slate-100 border-blue-50 px-4 py-2 rounded-full">
//               <Link href="/repair" className="flex items-center gap-1 text-lg">
//                 <GiAutoRepair />
//                 <p className="hidden md:block lg:block">Repair</p>
//               </Link>
//             </li>

//             <li
//               className="relative border bg-slate-100 border-blue-50 px-4 py-2 rounded-full"
//               onClick={toggleDropdown}
//             >
//               <div className="flex items-center gap-1 cursor-pointer text-lg">
//                 <MdLibraryBooks />
//                 <p className="hidden md:block lg:block">My Bookings</p>
//               </div>
//               {isOpen && (
//                 <ul className="absolute top-full left-0 mt- shadow-md rounded-lg p-2 ">
//                   <li className="border bg-slate-100 border-blue-50 px-4 py-2 rounded-full">
//                     <Link
//                       href="/car-bookings"
//                       className="flex items-center gap-1 text-xl"
//                     >
//                       <IoLogoModelS />
//                       <p className="hidden md:block lg:block">Booked car</p>
//                     </Link>
//                   </li>
//                   <li className="border bg-slate-100 border-blue-50 px-4 py-2 rounded-full mt-2">
//                     <Link
//                       href="/my-bookings"
//                       className="flex items-center gap-1 text-xl"
//                     >
//                       <GiAutoRepair />
//                       <p className="hidden md:block lg:block">Booked Service</p>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//           </ul>
//         </div>
//         <div className="flex items-center justify-center gap-1">
//           {!session.data ? (
//             <Link href="login">
//               <CustomButton
//                 title="Login"
//                 btnType="button"
//                 containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "
//               ></CustomButton>
//             </Link>
//           ) : (
//             <button
//               className="border bg-slate-100 border-blue-50text-xl px-4 flex items-center text-xl gap-1 py-2 rounded-full "
//               onClick={() => signOut()}
//             >
//               <VscSignOut />
//               <p className="hidden md:block lg:block">Logout</p>
//             </button>
//           )}
//         </div>

//         {/* <Link href="signup">
//           <CustomButton
//             title="Sign In"
//             btnType="button"
//             containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "
//           ></CustomButton>
//         </Link> */}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { GiAutoRepair } from "react-icons/gi";
import { signOut, useSession } from "next-auth/react";
import { VscSignOut } from "react-icons/vsc";
import { MdLibraryBooks } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showLoginPopup, setShowLoginPopup] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (!session) {
      e.preventDefault();
      setShowLoginPopup(true); // Show login popup if not logged in
    }
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] mx-auto flex justify-between items-center
      sm:px-16 px-6 py-4"
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

            <li
              className="relative border bg-slate-100 border-blue-50 px-4 py-2 rounded-full"
              onClick={toggleDropdown}
            >
              <div className="flex items-center gap-1 cursor-pointer text-lg">
                <MdLibraryBooks />
                <p className="hidden md:block lg:block">My Bookings</p>
              </div>
              {isOpen && (
                <ul className="absolute top-full left-0 mt- shadow-md rounded-lg p-2 ">
                  <li
                    className="border bg-slate-100 border-blue-50 px-4 py-2 rounded-full"
                    onClick={(e) => handleLinkClick(e, "/car-bookings")}
                  >
                    <Link
                      href="/car-bookings"
                      className="flex items-center gap-1 text-xl"
                    >
                      <IoLogoModelS />
                      <p className="hidden md:block lg:block">Booked Car</p>
                    </Link>
                  </li>
                  <li
                    className="border bg-slate-100 border-blue-50 px-4 py-2 rounded-full mt-2"
                    onClick={(e) => handleLinkClick(e, "/my-bookings")}
                  >
                    <Link
                      href="/my-bookings"
                      className="flex items-center gap-1 text-xl"
                    >
                      <GiAutoRepair />
                      <p className="hidden md:block lg:block">Booked Service</p>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center gap-1">
          {!session ? (
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
      </nav>

      {/* Popup Modal */}
      {showLoginPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg text-center w-80">
            <h3 className="text-xl mb-4">Please login first</h3>
            <button
              onClick={closeLoginPopup}
              className="border bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

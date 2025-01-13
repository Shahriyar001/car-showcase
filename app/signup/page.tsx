// "use client";
// import React from "react";
// import Link from "next/link";
// import { BsGithub, BsGoogle } from "react-icons/bs";
// import Image from "next/image";
// import SocialSignin from "@/components/SocialSignin";

// const SignUp = () => {
//   const handleSignup = async (event: any) => {
//     event.preventDefault();
//     const newUser = {
//       name: event.target.name.value,
//       email: event.target.email.value,
//       password: event.target.password.value,
//     };
//     const resp = await fetch("/api/signup", {
//       method: "POST",
//       body: JSON.stringify(newUser),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (resp.status === 200) {
//       event.target.reset();
//       alert("user created successfully");
//     }
//   };
//   return (
//     <div className="container mx-auto px-24 py-24">
//       <div className="grid grid-cols-1 my-10 lg:grid-cols-2 items-center gap-12 lg:my-20">
//         <div className="flex items-center justify-center">
//           <Image
//             src="/assets/images/login/login.svg"
//             height={440}
//             width={440}
//             alt="login image"
//           />
//         </div>
//         <div className="border-2 p-12">
//           <h6 className="text-3xl font-semibold text-center">Login!</h6>
//           <form onSubmit={handleSignup}>
//             <label className="form-control w-full">
//               <div className="label">
//                 <span className="label-text">Your Name</span>
//               </div>
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Your Name"
//                 className="input input-bordered w-full "
//               />
//             </label>
//             <label className="form-control w-full">
//               <div className="label">
//                 <span className="label-text">Email</span>
//               </div>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Your Email"
//                 className="input input-bordered w-full "
//               />
//             </label>
//             <label className="form-control w-full ">
//               <div className="label">
//                 <span className="label-text">Password</span>
//               </div>
//               <input
//                 name="password"
//                 type="password"
//                 placeholder="Password"
//                 className="input input-bordered w-full "
//               />
//             </label>
//             <br />
//             <button type="submit" className="w-full btn  btn-primary">
//               Sign In{" "}
//             </button>
//           </form>
//           <div className="">
//             <h6 className="my-3 text-center">or sign in width</h6>
//             <SocialSignin />
//             <h6 className="my-12 text-center">
//               Already have an account?{" "}
//               <Link className="text-primary font-semibold" href="/login">
//                 login
//               </Link>{" "}
//             </h6>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Image from "next/image";
import SocialSignin from "@/components/SocialSignin";

const SignUpContent = () => {
  const handleSignup = async (event: any) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const resp = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (resp.status === 200) {
      event.target.reset();
      alert("User created successfully");
    }
  };

  return (
    <div className="container mx-auto px-24 py-24">
      <div className="grid grid-cols-1 my-10 lg:grid-cols-2 items-center gap-12 lg:my-20">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/images/login/login.svg"
            height={440}
            width={440}
            alt="login image"
          />
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-center">Sign Up!</h6>
          <form onSubmit={handleSignup}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your Name</span>
              </div>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
            </label>
            <br />
            <button type="submit" className="w-full btn btn-primary">
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="my-3 text-center">or sign up with</h6>
            <SocialSignin />
            <h6 className="my-12 text-center">
              Already have an account?{" "}
              <Link className="text-primary font-semibold" href="/login">
                Login
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpContent />
    </Suspense>
  );
};

export default SignUp;

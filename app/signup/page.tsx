"use client";
import React from "react";
import Link from "next/link";
import { BsGithub, BsGoogle } from "react-icons/bs";
import Image from "next/image";

const SignUp = () => {
  const handleSignup = () => {};
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
          <h6 className="text-3xl font-semibold text-center">Login!</h6>
          <form onSubmit={handleSignup}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Your Name</span>
              </div>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full "
              />
            </label>
            <br />
            <button type="submit" className="w-full btn  btn-primary">
              Sign In{" "}
            </button>
          </form>
          <div className="">
            <h6 className="my-3 text-center">or sign in width</h6>
            <div>
              <button className="btn w-full  mb-2">
                <BsGoogle /> Google
              </button>
              <button className="btn w-full ">
                <BsGithub /> Github
              </button>
            </div>
            <h6 className="my-12 text-center">
              Already have an account?{" "}
              <Link className="text-primary font-semibold" href="/login">
                login
              </Link>{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

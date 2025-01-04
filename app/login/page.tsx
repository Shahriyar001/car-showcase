"use client";
import SocialSignin from "@/components/SocialSignin";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const Login = () => {
  const router = useRouter();
  const handleLogin = async (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (resp?.status === 200) {
      router.push("/");
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
          <h6 className="text-3xl font-semibold text-center">Login!</h6>
          <form onSubmit={handleLogin}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                name="email"
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
                name="password"
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
              <SocialSignin />
            </div>
            <h6 className="my-12 text-center">
              not have an account?{" "}
              <Link className="text-primary font-semibold" href="/signup">
                Sign Up
              </Link>{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

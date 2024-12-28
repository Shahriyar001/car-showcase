import Image from "next/image";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container mx-auto px-24 py-24">
      <div className="grid grid-cols-1 my-10 lg:grid-cols-2 gap-12 lg:my-20">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/images/login/login.svg"
            height={340}
            width={340}
            alt="login image"
          />
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-center">Login!</h6>
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
          <button className="w-full btn  btn-primary">Sign In </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignin = () => {
  const router = useRouter();
  const { status } = useSession();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleSocilaLogin = async (provider: any) => {
    const resp = await signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);
  return (
    <div className="">
      <button
        onClick={() => handleSocilaLogin("google")}
        className="btn w-full flex items-center justify-center   mb-2"
      >
        <BsGoogle /> Google
      </button>
      <button
        onClick={() => handleSocilaLogin("github")}
        className="btn w-full flex items-center justify-center  "
      >
        <BsGithub /> Github
      </button>
    </div>
  );
};

export default SocialSignin;

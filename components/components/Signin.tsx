"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = async () => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        callbackUrl: "/",
      });
      if (res?.error) {
        console.log(res.error);
      } else {
        router.push(res?.url || " ");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#393535] via-[#131212] to-black">
      <div className="max-w-[600px] h-max">
        <div className="flex flex-col justify-center items-center bg-black rounded-xl pt-8 pb-12 px-8">
          <p className="text-center text-white font-bold text-3xl mb-4">
            Welcome back
          </p>
          <p className="text-center text-white font-bold text-2xl my-5">
            Sign in to <span className="text-4xl text-[#3274a9]">BugNest</span>
          </p>
          <hr className="w-[440px] h-[2px] bg-gray-300 border-0 rounded-full mb-6" />
          <div className="w-full flex flex-row justify-between">
            <button
              onClick={async () => {
                await signIn("google", { callbackUrl: "/" });
              }}
              className="w-full mx-3 flex flex-row justify-center items-center bg-white px-6 py-2 rounded-[5px] text-xl font-semibold"
            >
              <img
                src="https://authjs.dev/img/providers/google.svg"
                className="w-[25px] mr-3"
              ></img>
              Google
            </button>
            <button
              onClick={async () => {
                await signIn("github", { callbackUrl: "/" });
              }}
              className="w-full mx-3 flex flex-row justify-center items-center bg-white px-6 py-2 rounded-[5px] text-xl font-semibold"
            >
              <img
                src="https://authjs.dev/img/providers/github.svg"
                className="w-[25px] mr-3"
              ></img>
              Github
            </button>
          </div>

          <div className="flex items-center justify-center my-5">
            <hr className="w-48 h-[2px] bg-gray-300 border-0 rounded-full" />
            <span className="px-4 text-lg font-medium text-white">Or</span>
            <hr className="w-48 h-[2px] bg-gray-300 border-0 rounded-full" />
          </div>
          <div className="flex flex-col gap-y-10 w-full">
            <form className="flex flex-col w-full gap-y-3">
              <label className="text-xl text-white font-semibold">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="user12@sdf.com"
                className="w-full flex flex-row justify-center items-center rounded-[4px] bg-white px-4 py-2  text-lg font-bold focuse:outline-4 focus:outline-white caret-[#3274a9]"
              ></input>
              <label className="text-xl text-white font-semibold">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Fdfr@134$$"
                className="w-full flex flex-row justify-center items-center rounded-[4px] bg-white px-4 py-2  text-lg font-bold focuse:outline-4 focus:outline-white caret-[#3274a9]"
              ></input>
            </form>
            <button
              onClick={handlesubmit}
              className="w-full bg-[#3274a9] rounded-[4px] font-semibold text-lg text-white active:text-[#333333] active:bg-white py-3"
            >
              Signin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

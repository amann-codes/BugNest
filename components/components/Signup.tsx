"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-end bg-gradient-to-b from-[#393535] via-[#131212] to-black">
      <div className="w-[450px] flex flex-col justify-start px-4">
        <div className="flex flex-col justify-center items-center bg-black h-[600px] rounded-t-full px-10">
          <div className="flex flex-col justify-start items-center">
            <p className="text-center text-white font-bold text-2xl">
              Welcome to
            </p>
            <span className="text-3xl font-semibold text-[#3274a9]">BugNest</span>
          </div>
          <p className="text-center text-white font-bold text-xl mb-1 mt-6">
            Signup
          </p>
          <hr className="w-[380px] h-[2px] bg-gray-300 border-0 rounded-full mb-3" />

          <div className="flex flex-col gap-y-5 w-full">
            <form className="flex flex-col w-full gap-y-2">
              <label
                htmlFor="name"
                className="text-lg text-white font-semibold"
              >
                Name
              </label>
              <input
                id="name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="dettolman"
                className="w-full rounded-[4px] bg-white px-4 py-2 text-base font-semibold focus:outline-4 focus:outline-white caret-[#3274a9]"
              />
              <label
                htmlFor="email"
                className="text-lg text-white font-semibold"
              >
                Email
              </label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="user12@sdf.com"
                className="w-full rounded-[4px] bg-white px-4 py-2 text-base font-semibold focus:outline-4 focus:outline-white caret-[#3274a9]"
              />
              <label
                htmlFor="password"
                className="text-lg text-white font-semibold"
              >
                Password
              </label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Fdfr@134$$"
                className="w-full rounded-[4px] bg-white px-4 py-2 text-base font-semibold focus:outline-4 focus:outline-white caret-[#3274a9]"
              />
            </form>
            <button
              onClick={handleSignUp}
              className="w-full bg-[#3274a9] rounded-[4px] font-semibold text-lg text-white active:text-[#333333] active:bg-white py-2"
            >
              Create your account
            </button>
          </div>

          <p className="text-white mt-5">
            Already have an account?
            <a href="/signin" className="text-[#3274a9]">
              Signin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

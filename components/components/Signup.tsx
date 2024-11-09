"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#393535] via-[#131212] to-black">
      <div className="w-[500px] h-max">
        <div className="flex flex-col justify-center items-center bg-black rounded-xl pt-8 pb-12 px-8">
          <p className="text-center text-white font-bold text-3xl mb-4">
            Welcome to <span className="text-4xl text-[#3274a9]">BugNest</span>
          </p>
          <p className="text-center text-white font-bold text-3xl my-5">
            Signup
          </p>
          <div className="flex flex-col gap-y-10 w-full">
            <form className="flex flex-col w-full gap-y-3">
              <label className="text-xl text-white font-semibold">Name</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="dettolman"
                className="w-full flex flex-row justify-center items-center rounded-[4px] bg-white px-4 py-2  text-lg font-bold focuse:outline-4 focus:outline-white caret-[#3274a9]"
              ></input>
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
              onClick={async () => {
                try {
                  const res = await fetch("/api/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name,
                      email,
                      password,
                    }),
                  });
                  console.log({ name, email, password });
                  console.log(res);
                } catch (e) {
                  console.log(e);
                }
              }}
              className="w-full bg-[#3274a9] rounded-[4px] py-3 font-semibold text-lg text-white active:text-[#333333] active:bg-white"
            >
              Create you account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

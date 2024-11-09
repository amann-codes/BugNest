"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Icon from "./Icon";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
export default function Info() {
  const [img, setImg] = useState(true);
  const { data: session } = useSession();
  const image = session?.user?.image;
  if (!!img) {
    setImg(false);
  }
  return (
    <div className="flex flex-row items-center gap-x-6">
      <p className="text-lg font-medium text-white">
        Hey
        <span className="text-xl ml-2 font-semibold text-white ">
          {session?.user?.name || "User"}
        </span>
      </p>
      <Popover>
        <PopoverTrigger>
          <Icon
            name={session?.user?.name || " "}
            width="40"
            height="40"
            fontSize="xl"
            borderRadius="full"
          ></Icon>
        </PopoverTrigger>
        <PopoverContent className="w-max -translate-x-[5%] mt-2 bg-black/70 flex flex-col gap-y-4 border-transparent">
          <div className="flex flex-row items-center w-max gap-x-3">
            <Icon
              name={session?.user?.name || " "}
              width="50"
              height="50"
              fontSize="2xl"
              borderRadius="md"
            ></Icon>
            <div className="flex flex-col justify-start">
              <p className="text-xl font-semibold text-white ">
                {session?.user?.name}
              </p>
              <p className="text-lg font-medium text-white ">
                {session?.user?.email}
              </p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="p-2 bg-black text-white rounded-md border"
          >
            Logout
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

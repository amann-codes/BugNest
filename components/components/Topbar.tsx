"use client"
import React from "react";
import { Button } from "../ui/button";
import UserButton from "./UserButton";
import { signOut } from "next-auth/react";

export default function Topbar() {
  return (
    <div className="w-full h-[100px] rounded-md bg-[#3274a9]">
      <div className="flex flex-row justify-between items-center">
        <Button></Button>
        <div className="flex flex-row justify-between items-center">
          <p className="mr-7">Hey, User</p>
          <UserButton />
        </div>
      </div>
    </div>
  );
}

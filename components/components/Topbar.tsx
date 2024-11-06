"use client";
import React from "react";
import Info from "./Info";
import { Plus } from "lucide-react";
import Searchbar from "./Searchbar";

export default function Topbar() {
  return (
    <div className="w-full h-max rounded-lg bg-[#3274a9] mb-3">
      <div className="flex flex-row justify-between items-center p-3">
        <Searchbar />
        <Info />
      </div>
    </div>
  );
}

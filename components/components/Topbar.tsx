"use client";
import React from "react";
import { Button } from "../ui/button";
import Info from "./Info";
import { Plus } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full h-max rounded-lg bg-[#3274a9] mb-3">
      <div className="flex flex-row justify-between items-center p-3">
        <div className="flex flex-row items-center py-2 px-3 border-2 border-[#0a0f29] gap-x-4 rounded-lg">
          <Plus className="bg-[#1a287e] size-10 rounded-lg p-1 text-white" />
          <span className="text-xl text-white">Add Project</span>
        </div>
        <Info />
      </div>
    </div>
  );
}

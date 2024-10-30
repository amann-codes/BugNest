import React from "react";

interface ViewProps {
  title: string;
  description: string;
  status: string;
}
export default function Tile({ title, description, status }: ViewProps) {
  return (
    <div className="flex flex-col h-[200px] w-full rounded-lg bg-white border-2 border-black pb-4">
      <div className="flex flex-row justify-between mb-3">
        <p className="text-2xl font-bold truncate">{title}</p>
        <p className="text-xl font-medium">{status}</p>
      </div>
      <div className="w-full h-[150px]">
        <p className="text-xl font-semibold px-3 overflow-hidden text-ellipsis whitespace-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

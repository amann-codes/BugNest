import React from "react";

interface ViewProps {
  title: string;
  description: string;
  status: string;
}

export default function Box({ title, description, status }: ViewProps) {
  return (
    <div className="flex flex-col h-[300px] w-[660px] rounded-lg bg-white border-2 border-black p-4">
      <div className="flex flex-row justify-between mb-3">
        <p className="text-2xl font-bold truncate">{title}</p>
        <p className="text-xl font-medium">{status}</p>
      </div>
      <div className="relative flex-1 overflow-hidden">
        <p className="absolute inset-0 text-xl font-semibold px-3 line-clamp-5">
          {description}
        </p>
      </div>
    </div>
  );
}
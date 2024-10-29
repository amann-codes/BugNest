import React from "react";

interface ViewProps {
  title: String;
  description: String;
  status: String;
}

export default function Box({ title, description, status }: ViewProps) {
  return (
    <div className="flex flex-col justify-start max-w-[750px] h-max rounded-lg bg-white border-2 border-black p-4 gap-y-3">
      <div className="flex flex-row justify-between">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl font-medium">{status}</p>
      </div>
      <p className="text-xl font-semibold">{description}</p>
    </div>
  );
}

import React from "react";

export default function View() {
  return (
    <div className="bg-[#3472a9] flex flex-row gap-x-3 rounded-lg px-4 py-2 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
      <p className="text-xl text-white">View</p>
    </div>
  );
}

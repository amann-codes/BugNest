import React from "react";

export default function Searchbar() {
  return (
    <div className="w-1/2 h-max py-2 px-4 bg-[#3274a9] flex flex-row rounded-lg border-2 justify-between items-center">
      <p className="text-lg text-white">
        Search
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
}

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Sortbutton() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="w-max h-full flex flex-row bg-[#3274a9] items-center gap-x-2 rounded-lg  py-3 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>

          <span className="text-xl text-white">Priority</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-max rounded-lg bg-[#3274a9] border-0 shadow-md">
        <div>High</div>
        <div>Medium</div>
        <div>Low</div>
      </PopoverContent>
    </Popover>
  );
}

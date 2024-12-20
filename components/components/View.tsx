"use client";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function View() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className="w-max h-full flex flex-row bg-[#3274a9] items-center gap-x-2 rounded-lg  py-2 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
          <p className="text-xl text-white">View</p>
        </div>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={-60}
        align="start"
        alignOffset={110}
        className="w-max rounded-lg bg-slate-800 backdrop:blur-md border-0 shadow-md ml-2"
      >
        <div className="flex flex-row gap-x-4 items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 4.75h16.5M3.75 9.75h16.5M3.75 14.75h16.5M3.75 19.75h16.5"
            />
          </svg>
          <p className="text-xl font-medium text-white">Tile</p>
        </div>
        <div className="flex flex-row gap-x-4 items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="23px"
            height="23px"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M19,13 C20.6568542,13 22,14.3431458 22,16 L22,19 C22,20.6568542 20.6568542,22 19,22 L16,22 C14.3431458,22 13,20.6568542 13,19 L13,16 C13,14.3431458 14.3431458,13 16,13 L19,13 Z M8,13 C9.65685425,13 11,14.3431458 11,16 L11,19 C11,20.6568542 9.65685425,22 8,22 L5,22 C3.34314575,22 2,20.6568542 2,19 L2,16 C2,14.3431458 3.34314575,13 5,13 L8,13 Z M19,15 L16,15 C15.4477153,15 15,15.4477153 15,16 L15,19 C15,19.5522847 15.4477153,20 16,20 L19,20 C19.5522847,20 20,19.5522847 20,19 L20,16 C20,15.4477153 19.5522847,15 19,15 Z M8,15 L5,15 C4.44771525,15 4,15.4477153 4,16 L4,19 C4,19.5522847 4.44771525,20 5,20 L8,20 C8.55228475,20 9,19.5522847 9,19 L9,16 C9,15.4477153 8.55228475,15 8,15 Z M8,2 C9.65685425,2 11,3.34314575 11,5 L11,8 C11,9.65685425 9.65685425,11 8,11 L5,11 C3.34314575,11 2,9.65685425 2,8 L2,5 C2,3.34314575 3.34314575,2 5,2 L8,2 Z M19,2 C20.6568542,2 22,3.34314575 22,5 L22,8 C22,9.65685425 20.6568542,11 19,11 L16,11 C14.3431458,11 13,9.65685425 13,8 L13,5 C13,3.34314575 14.3431458,2 16,2 L19,2 Z M8,4 L5,4 C4.44771525,4 4,4.44771525 4,5 L4,8 C4,8.55228475 4.44771525,9 5,9 L8,9 C8.55228475,9 9,8.55228475 9,8 L9,5 C9,4.44771525 8.55228475,4 8,4 Z M19,4 L16,4 C15.4477153,4 15,4.44771525 15,5 L15,8 C15,8.55228475 15.4477153,9 16,9 L19,9 C19.5522847,9 20,8.55228475 20,8 L20,5 C20,4.44771525 19.5522847,4 19,4 Z"
            />
          </svg>
          <p className="text-xl font-medium text-white">Box</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}

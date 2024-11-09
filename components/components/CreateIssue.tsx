"use clinet";
import { ChevronsUpDown, Plus } from "lucide-react";
import React, { useState, useEffect } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";

interface CreateIssueProps {
  projectId: string;
  onIssueCreated: () => void;
}

interface Issues {
  title: string;
  description: string;
  status: string;
}

export default function CreateIssue({
  projectId,
  onIssueCreated,
}: CreateIssueProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [priority, setPriority] = useState("");
  const handleCreateIssue = async () => {
    try {
      const res = await fetch("/api/issue/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId,
          title,
          description,
          priority,
        }),
      });
      if (res.ok) {
        onIssueCreated();
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-max h-full flex flex-row items-center bg-[#3274a9] py-2 px-3 gap-x-4 rounded-lg mb-3">
          <span className="text-xl text-white">Create Issue</span>
          <Plus className="bg-[#1a287e] size-[45px] rounded-lg p-1 text-white" />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#3274a9] border-black">
        <div className="flex flex-col justify-start">
          <DialogTitle className="mb-6 text-2xl">Create Issue</DialogTitle>
          <form className="flex flex-col justify-start">
            <label htmlFor="title" className="text-xl font-medium">
              Issue
            </label>
            <input
              id="title"
              className="focus:outline-none p-2 rounded-md mb-3"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label htmlFor="desc" className="text-xl font-medium">
              Describe the issue you are facing
            </label>
            <textarea
              id="desc"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              className="focus:outline-none resize-none p-2 rounded-md"
            ></textarea>
          </form>
          <div className="w-max flex justify-start">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger className="w-max flex justify-between gap-x-4 bg-slate-900 h-max text-white border-0 px-4 py-2 mt-4 rounded-md">
                <p className="text-lg">Priority</p>
                <ChevronsUpDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={-40}
                alignOffset={-90}
                className="w-max bg-slate-900 rounded-md p-2 text-white ml-3"
              >
                <p
                  onClick={() => {
                    setOpen(false);
                    setPriority("low");
                  }}
                >
                  low
                </p>
                <p
                  onClick={() => {
                    setOpen(false);
                    setPriority("medium");
                  }}
                >
                  medium
                </p>
                <p
                  onClick={() => {
                    setOpen(false);
                    setPriority("high");
                  }}
                >
                  high
                </p>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full flex flex-row justify-end gap-x-4 mt-4">
          <DialogClose asChild>
            <button className="py-2 px-4 text-white bg-slate-900 rounded-md">
              Close
            </button>
          </DialogClose>
          <button
            className="py-2 px-4 bg-slate-900 text-white rounded-md"
            onClick={handleCreateIssue}
          >
            Create
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

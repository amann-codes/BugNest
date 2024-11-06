"use client";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "../ui/dialog";
import Project from "./Project";

interface Projects {
  title: string;
}

export default function Projects() {
  const [title, setTitle] = useState("");
  const [projects, setProjects] = useState<Projects[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/create/project", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        setProjects(data.projects);
        console.log("projects:::", projects);
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="h-max overflow-x-auto px-2 gap-x-3 py-2 rounded-lg bg-[#3274a9] text-white text-xl font-semibold">
      <Dialog>
        <DialogTrigger asChild>
          <Plus className="bg-[#1a287e] size-10 rounded-lg p-1 text-white" />
        </DialogTrigger>
        <DialogContent className="bg-[#3274a9] border-black">
          <DialogTitle>Create Project</DialogTitle>
          <div className="flex flex-col">
            <input
              className="focus:outline-none p-2 rounded-md"
              type="text"
              placeholder="project name"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <div className="flex flex-row justify-start gap-x-4">
              <DialogClose asChild>
                <button className="py-2 px-4 text-white bg-slate-900 mt-3 rounded-md">
                  Close
                </button>
              </DialogClose>
              <button
                className="py-2 px-4 text-white bg-slate-900 mt-3 rounded-md"
                onClick={async () => {
                  try {
                    const res = await fetch("/api/create/project", {
                      method: "POST",
                      headers: { "Content-type": "applicaiton/json" },
                      body: JSON.stringify({
                        title,
                      }),
                    });
                    console.log(res);
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                Create
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="h-max flex flex-col items-center gap-x-3 overflow-x-auto m-2">
        {projects.map((items, index) => {
          return <Project key={index} title={items.title} />;
        })}
      </div>
    </div>
  );
}

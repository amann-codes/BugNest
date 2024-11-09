"use client";
import Sortbutton from "@/components/components/Sortbutton";
import IssueScreen from "@/components/components/IssueScreen";
import React, { useState } from "react";
import Searchbar from "@/components/components/Searchbar";
import View from "@/components/components/View";
import Projects from "@/components/components/Projects";
import Topbar from "@/components/components/Topbar";

export default function page() {
  const [selectProjectId, setSelectProjectId] = useState<string>("");

  const handleSelectProject = (projectId: string) => {
    setSelectProjectId(projectId);
  };
  return (
    <div className="flex flex-col p-3">
      <Topbar />
      <div className="flex flex-row gap-x-3">
        <Projects onSelectProject={handleSelectProject} />
        <IssueScreen projectId={selectProjectId} />
      </div>
    </div>
  );
}

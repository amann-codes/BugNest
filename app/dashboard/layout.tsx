import Projects from "@/components/components/Projects";
import Sidebar from "@/components/components/Sidebar";
import Sortbutton from "@/components/components/Sortbutton";
import Topbar from "@/components/components/Topbar";
import View from "@/components/components/View";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col pt-3 px-3">
        <Topbar />
        <div className="w-full h-full flex flex-col gap-y-3">
          <Projects />
          <div className="flex flex-row gap-x-4">
            <Sortbutton />
            <View />
          </div>
          <div className="w-full h-full flex flex-row">{children}</div>
        </div>
      </div>
    </div>
  );
}

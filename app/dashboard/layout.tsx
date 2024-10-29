import Sidebar from "@/components/components/Sidebar";
import Topbar from "@/components/components/Topbar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col pt-3 px-3">
        <Topbar />
        <div className="w-full h-full flex flex-row">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}

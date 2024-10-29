import Topbar from "@/components/components/Topbar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
}

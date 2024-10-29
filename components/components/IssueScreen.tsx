import React from "react";
import Box from "./View/Box";

export default function IssueScreen() {
  return (
    <div className="w-full h-max bg-[#3274a9] rounded-t-lg p-3 overflow-y-auto">
      <div className="text-white mb-3">Display Issues</div>
      <div className="flex flex-wrap gap-3">
        <Box
          title="issue1"
          description="description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created"
          status="active"
        />
        <Box
          title="issue1"
          description="description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created"
          status="active"
        />
        <Box
          title="issue1"
          description="description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created"
          status="active"
        />
        <Box
          title="issue1"
          description="description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created"
          status="active"
        />
      </div>
    </div>
  );
}

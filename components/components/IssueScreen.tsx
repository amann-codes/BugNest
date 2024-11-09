"use client";
import React, { useEffect, useState } from "react";
import Sortbutton from "./Sortbutton";
import View from "./View";
import Box from "./View/Box";
import Tile from "./View/Tile";
import CreateIssue from "./CreateIssue";

interface Issues {
  title: string;
  description: string;
  status: string;
}

interface IssueScreenProps {
  projectId: string;
}

export default function IssueScreen({ projectId }: IssueScreenProps) {
  const [issues, setIssues] = useState<Issues[]>([]);
  const [box, setBox] = useState(false);
  const [tile, setTile] = useState(false);
  const fetchIssuse = async () => {
    const issues = await fetch(`/api/issue/get?projectId=${projectId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log(issues);
    const data = await issues.json();
    setIssues(data.issues);
  };
  useEffect(() => {
    fetchIssuse();
  }, [projectId]);

  return (
    <div className="w-full h-max">
      <div>
        <div className="w-full h-[60px] flex flex-row gap-3 mb-3">
          <CreateIssue projectId={projectId} onIssueCreated={fetchIssuse} />
          <Sortbutton />
          <View />
        </div>
      </div>
      <div className="bg-[#3274a9] rounded-lg p-8">
        <p className="w-full h-max mb-3">
          Project logo, name, creator, description
        </p>
        <div className="h-[422px] overflow-y-auto flex flex-wrap items-center justify-center gap-3 px-2">
          {issues.map((items, index) => {
            return (
              <div key={index}>
                <Box
                  title={items.title}
                  description={items.description}
                  status={items.status}
                />
                {box && (
                  <Box
                    title={items.title}
                    description={items.description}
                    status={items.status}
                  />
                )}
                {tile && (
                  <Tile
                    title={items.title}
                    description={items.description}
                    status={items.status}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import Sortbutton from "@/components/components/Sortbutton";
import IssueScreen from "@/components/components/IssueScreen";
import React from "react";
import Searchbar from "@/components/components/Searchbar";
import View from "@/components/components/View";

export default function page() {
  return (
    <div className="w-max h-full flex flex-col gap-y-3">
      <div className="flex flex-row justify-between"></div>
      <IssueScreen />
    </div>
  );
}

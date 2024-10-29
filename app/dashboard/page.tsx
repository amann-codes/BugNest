import Sortbutton from "@/components/components/Sortbutton";
import IssueScreen from "@/components/components/IssueScreen";
import React from "react";
import Searchbar from "@/components/components/Searchbar";
import View from "@/components/components/View";

export default function page() {
  return (
    <div className="w-max h-max flex flex-col gap-y-3">
      <div className="w-full h-max flex flex-row gap-x-3">
        <Sortbutton />
        <View />
        <Searchbar />
      </div>
      <IssueScreen />
    </div>
  );
}

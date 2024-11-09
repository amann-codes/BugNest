import React from "react";
import Icon from "./Icon";

interface ProjectProps {
  title: string;
}

export default function Project({ title }: ProjectProps) {
  return (
    <div>
      <Icon
        width="45"
        height="45"
        fontSize="xl"
        borderRadius="md"
        name={title}
      />
    </div>
  );
}

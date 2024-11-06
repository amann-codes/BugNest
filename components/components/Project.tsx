import React from "react";
import Icon from "./Icon";

interface ProjectProps {
  title: string;
}

export default function Project({ title }: ProjectProps) {
  return (
    <Icon width="50" height="50" fontSize="xl" borderRadius="md" name={title} />
  );
}

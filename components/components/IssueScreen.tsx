import React from "react";
import Box from "./View/Box";
import Tile from "./View/Tile";

export default function IssueScreen() {
  return (
    <div className="w-full h-max bg-[#3274a9] rounded-t-lg p-8">
      <p className="w-full h-max mb-3">
        Project logo, name, creator, description{" "}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Box title="issue1" description="The les." status="active" />
        <Box
          title="issue1"
          description="The Transformers movies, though visually spectacular and popular worldwide, often face criticism for their approach to storytelling, character development, and adherence to the core essence of the original Transformers lore. One of the primary issues lies in the inconsistent focus on the actual Transformers, with the storylines often centering too heavily on human characters, thereby sidelining the beloved Autobots and Decepticons who are the real stars of the franchise. Characters like Optimus Prime and Bumblebee occasionally lack the depth and consistent personalities fans expect, sometimes appearing more as plot devices than fully realized individuals. This, combined with rapid, frenetic action scenes that can be visually overwhelming and hard to follow, makes it difficult for audiences to connect emotionally with the Transformers. Additionally, the overarching plotlines across the series often feel disjointed, with each film introducing new threats and lore that don't always align with previous installments, creating a sense of narrative confusion. Despite an attempt to create an epic intergalactic conflict, many of the films rely heavily on formulaic plots, repetitive action sequences, and spectacle over substance, which often dilutes the stakes and emotional impact. Fans of the original 1980s animated series and comics also argue that the films stray too far from the original character designs and personalities, turning the complex, morally ambiguous world of the Transformers into a series of chaotic battles."
          status="active"
        />
        <Box
          title="issue1"
          description="description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created"
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
        <Tile
          title="issue1"
          description="description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created"
          status="active"
        />
        <Tile
          title="issue1"
          description="description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created"
          status="active"
        />
        <Tile
          title="issue1"
          description="description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created"
          status="active"
        />
        <Tile
          title="issue1"
          description="description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created description about the issue that you created"
          status="active"
        />
      </div>
    </div>
  );
}

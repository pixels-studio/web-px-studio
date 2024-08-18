"use client";

import React from "react";
import ProjectTeaser1 from "@/assets/projects/project-teaser-1.png";
import ProjectTeaser2 from "@/assets/projects/project-teaser-2.png";
import ProjectTeaser3 from "@/assets/projects/project-teaser-3.png";
import ProjectTeaser4 from "@/assets/projects/project-teaser-4.png";
import ProjectTeaser5 from "@/assets/projects/project-teaser-5.png";
import ProjectTeaser6 from "@/assets/projects/project-teaser-6.png";
import ProjectTeaser7 from "@/assets/projects/project-teaser-7.png";
import ProjectTeaser8 from "@/assets/projects/project-teaser-8.png";
import ProjectTeaser9 from "@/assets/projects/project-teaser-9.png";
import Image from "next/image";

export default function Footer() {
  const PROJECTS = [
    ProjectTeaser1,
    ProjectTeaser2,
    ProjectTeaser3,
    ProjectTeaser4,
    ProjectTeaser5,
    ProjectTeaser6,
    ProjectTeaser7,
    ProjectTeaser8,
    ProjectTeaser9,
  ];

  return (
    <footer className="no-scrollbar mt-auto flex items-center gap-5 overflow-x-scroll bg-gray-100 p-5">
      {PROJECTS.map((project, index) => {
        return (
          <div
            className="relative aspect-[2/1] w-40 shrink-0 overflow-hidden rounded bg-black"
            key={index}
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={project}
              alt="Project"
              placeholder="blur"
            />
          </div>
        );
      })}
    </footer>
  );
}

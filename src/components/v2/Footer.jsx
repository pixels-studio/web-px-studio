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
  const currentYear = new Date().getFullYear();

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
    <footer className="mt-auto overflow-x-auto bg-gray-100 p-5">
      <div className="mx-auto flex h-full items-center justify-between gap-5">
        {PROJECTS.map((project) => {
          return (
            <Image
              className="aspect-[2/1] w-40 rounded object-cover"
              src={project}
              alt="Project "
            />
          );
        })}
      </div>
    </footer>
  );
}

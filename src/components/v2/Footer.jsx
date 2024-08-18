"use client";

import React from "react";
import Image from "next/image";
import { PROJECTS } from "@/utility/constants";

export default function Footer({ currentIndex, setCurrentIndex }) {
  return (
    <footer className="no-scrollbar mt-auto flex items-center gap-5 overflow-x-scroll bg-gray-100 p-5">
      {PROJECTS.map((project, index) => (
        <button
          key={index}
          className={`relative aspect-[2/1] w-40 shrink-0 overflow-hidden rounded ${
            index === currentIndex
              ? "ring-accent ring-2 ring-offset-2 ring-offset-gray-100"
              : ""
          }`}
          onClick={() => setCurrentIndex(index)}
        >
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={project.image}
            alt={project.title}
            placeholder="blur"
          />
        </button>
      ))}
    </footer>
  );
}

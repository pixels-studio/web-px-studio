"use client";

import React, { useCallback, useEffect, useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";

const PROJECTS = [
  {
    image: ProjectTeaser1,
    title: "Unsplash Desktop App",
    subtitle: "Native MacOS Client for Unsplash",
  },

  {
    image: ProjectTeaser2,
    title: "Unsplash Figma Plugin",
    subtitle: "Figma Extension for designers",
  },
  {
    image: ProjectTeaser3,
    title: "Unsplash for iOS",
    subtitle: "Redesigned for intuitive mobile experience and visual impact.",
  },
  {
    image: ProjectTeaser4,
    title: "Interview Screen",
    subtitle: "AI Powered Candidate screening",
  },
  {
    image: ProjectTeaser5,
    title: "Interview Screen",
    subtitle: "AI Powered Candidate screening",
  },
  {
    image: ProjectTeaser6,
    title: "Interview Screen",
    subtitle: "AI Powered Candidate screening",
  },
  {
    image: ProjectTeaser7,
    title: "Interview Screen",
    subtitle: "AI Powered Candidate screening",
  },
  {
    image: ProjectTeaser8,
    title: "Interview Screen",
    subtitle: "AI Powered Candidate screening",
  },
  {
    image: ProjectTeaser9,
    title: "Interview Screen",
    subtitle: "AI Powered Candidate screening",
  },
];

const SLIDE_VARIANTS = {
  enter: () => ({
    opacity: 0,
  }),
  center: {
    opacity: 1,
  },
  exit: () => ({
    opacity: 0,
  }),
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = useCallback(
    (direction) => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex + direction + PROJECTS.length) % PROJECTS.length,
        );
      }
    },
    [isAnimating],
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") changeSlide(-1);
      else if (event.key === "ArrowRight") changeSlide(1);
    },
    [changeSlide],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="relative flex flex-1 items-center justify-center px-10 py-10">
      <div className="absolute inset-0 z-10 grid grid-cols-2">
        <button
          onClick={() => changeSlide(-1)}
          className="h-full w-full cursor-w-resize bg-transparent outline-none"
        ></button>
        <button
          onClick={() => changeSlide(1)}
          className="h-full w-full cursor-e-resize bg-transparent outline-none"
        ></button>
      </div>

      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-5">
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => setIsAnimating(false)}
        >
          <motion.div
            key={currentIndex}
            variants={SLIDE_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.25,
              ease: [0.26, 0.08, 0.25, 1],
            }}
            className="relative aspect-[2/1] w-full overflow-hidden rounded bg-gray-50"
          >
            <Image
              src={PROJECTS[currentIndex].image}
              alt={PROJECTS[currentIndex].title}
              placeholder="blur"
              className="absolute inset-0 h-full w-full object-cover"
              quality={100}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex items-end justify-between">
          <div className="flex-1 text-sm font-semibold uppercase tracking-wide">
            <p>{PROJECTS[currentIndex].title}</p>
            <p className="text-black/50">{PROJECTS[currentIndex].subtitle}</p>
          </div>

          <button className="bg-accent relative z-20 rounded-full px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200">
            View Case Study
          </button>
        </div>
      </div>
    </section>
  );
}

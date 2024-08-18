"use client";

import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import ProjectTeaser1 from "@/assets/projects/circle-interview.png";
import ProjectTeaser2 from "@/assets/projects/circle-origon-ui.png";
import ProjectTeaser3 from "@/assets/projects/tribe-app-screens-1.png";
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  { image: ProjectTeaser1, title: "Circle — Interview Platform" },
  { image: ProjectTeaser2, title: "Circle — Origon Chat Interface" },
  { image: ProjectTeaser3, title: "Tribe — iOS App" },
];

const SLIDE_VARIANTS = {
  enter: (direction) => ({
    x: direction > 0 ? "20%" : "-20%",
    opacity: 0,
    filter: "blur(10px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction) => ({
    x: direction < 0 ? "20%" : "-20%",
    opacity: 0,
    filter: "blur(10px)",
  }),
};

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isProjectDetailViewOpen, setIsProjectDetailViewOpen] = useState(false);

  const changeSlide = useCallback(
    (direction) => {
      if (!isAnimating) {
        setIsAnimating(true);
        setSlideDirection(direction);
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

  const toggleProjectDetail = useCallback(() => {
    setIsProjectDetailViewOpen(!isProjectDetailViewOpen);
  }, [isProjectDetailViewOpen]);

  const handleCloseProjectDetail = useCallback(() => {
    setIsProjectDetailViewOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="sticky top-0 h-screen w-full p-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.26, 0.08, 0.25, 1], delay: 0.4 }}
        className="flex h-full w-full flex-col overflow-hidden rounded-md bg-card"
      >
        <div className="relative flex flex-1">
          <AnimatePresence>
            {isProjectDetailViewOpen && (
              <ProjectDetailView
                project={PROJECTS[currentIndex]}
                onClose={handleCloseProjectDetail}
              />
            )}
          </AnimatePresence>

          <AnimatePresence
            initial={false}
            custom={slideDirection}
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={currentIndex}
              custom={slideDirection}
              variants={SLIDE_VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.25, ease: [0.26, 0.08, 0.25, 1] },
                x: { duration: 0.5, ease: [0.26, 0.08, 0.25, 1] },
              }}
              className="absolute inset-10 flex items-center justify-center"
            >
              <Image
                src={PROJECTS[currentIndex].image}
                alt={PROJECTS[currentIndex].title}
                className="h-full w-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <ProjectInfo
          project={PROJECTS[currentIndex]}
          onPrevious={() => changeSlide(-1)}
          onNext={() => changeSlide(1)}
          isAnimating={isAnimating}
          toggleProjectDetail={toggleProjectDetail}
        />
      </motion.div>
    </section>
  );
}

function ProjectInfo({ project, onPrevious, onNext, isAnimating }) {
  return (
    <div className="flex items-center justify-start gap-5 border-t border-white/5 px-10 py-4">
      <div className="flex items-center gap-5">
        <NavigationArrow
          onClick={onPrevious}
          direction="left"
          disabled={isAnimating}
        />
        <NavigationArrow
          onClick={onNext}
          direction="right"
          disabled={isAnimating}
        />

        <div className="h-5 w-px bg-white/20" />

        <button className="hover:bg-accent grid h-7 w-7 place-items-center rounded-full bg-white/10 text-white outline-none transition-all duration-200 hover:text-black">
          <PlusIcon />
        </button>
      </div>

      <p className="flex-1">{project.title}</p>
    </div>
  );
}

function NavigationArrow({ onClick, direction, disabled }) {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`grid h-7 w-7 place-items-center rounded-full bg-white/10 transition duration-200 ${
        disabled ? "opacity-50" : "hover:bg-white/20"
      }`}
    >
      <Icon />
    </button>
  );
}

function ProjectDetailView({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-20 flex origin-bottom items-center justify-center bg-card/90 p-10 saturate-150 backdrop-blur-md"
    >
      <p>Project details</p>
    </motion.div>
  );
}

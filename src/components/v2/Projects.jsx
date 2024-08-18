"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/utility/constants";

const SLIDE_VARIANTS = {
  enter: () => ({ opacity: 0 }),
  center: { opacity: 1 },
  exit: () => ({ opacity: 0 }),
};

export default function Projects({ currentIndex, changeSlide, openProject }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = useCallback(
    (direction) => {
      if (!isAnimating) {
        setIsAnimating(true);
        changeSlide(direction);
      }
    },
    [isAnimating, changeSlide],
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") handleSlideChange(-1);
      else if (event.key === "ArrowRight") handleSlideChange(1);
    },
    [handleSlideChange],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="relative flex flex-1 items-center justify-center px-10 py-10">
      <div className="absolute inset-0 z-10 grid grid-cols-2">
        <button
          onClick={() => handleSlideChange(-1)}
          className="h-full w-full cursor-w-resize bg-transparent outline-none"
          aria-label="Previous project"
        />
        <button
          onClick={() => handleSlideChange(1)}
          className="h-full w-full cursor-e-resize bg-transparent outline-none"
          aria-label="Next project"
        />
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
            layout
            layoutId={PROJECTS[currentIndex].title}
            className="relative aspect-[2/1] w-full overflow-hidden rounded bg-black"
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

          <button
            onClick={() => openProject(PROJECTS[currentIndex])}
            className="bg-accent relative z-20 rounded-full px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200"
          >
            View Case Study
          </button>
        </div>
      </div>
    </section>
  );
}

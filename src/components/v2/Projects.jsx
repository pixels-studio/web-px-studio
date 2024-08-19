"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/utility/constants";
import PixelatedImage from "./PixelatedImage";
import { CursorLeftIcon } from "../Icons";

const CustomCursorButton = ({ onClick, direction, children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const arrowVariants = {
    left: { rotate: 0 },
    right: { rotate: 180 },
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative h-full w-full cursor-none bg-transparent outline-none"
    >
      {children}
      {isHovering && (
        <motion.div
          style={{
            position: "fixed",
            left: cursorPosition.x,
            top: cursorPosition.y,
            pointerEvents: "none",
            zIndex: 9999,
          }}
          initial={direction === "left" ? "left" : "right"}
          animate={direction === "left" ? "left" : "right"}
          variants={arrowVariants}
          transition={{ duration: 3 }}
        >
          <CursorLeftIcon />
        </motion.div>
      )}
    </div>
  );
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
        <CustomCursorButton
          onClick={() => handleSlideChange(-1)}
          direction="left"
        >
          <span className="sr-only">Previous project</span>
        </CustomCursorButton>
        <CustomCursorButton
          onClick={() => handleSlideChange(1)}
          direction="right"
        >
          <span className="sr-only">Next project</span>
        </CustomCursorButton>
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-[1000px] flex-col gap-5">
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => setIsAnimating(false)}
        >
          <motion.div
            key={currentIndex}
            layout
            layoutId={PROJECTS[currentIndex].title}
            className="aspect-[2/1] w-full overflow-hidden rounded bg-black"
          >
            <PixelatedImage
              src={PROJECTS[currentIndex].image}
              alt={PROJECTS[currentIndex].title}
              onAnimationComplete={() => setIsAnimating(false)}
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
            className="rounded-full bg-accent px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200"
          >
            View Case Study
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState, useCallback } from "react";
import ProjectTeaser1 from "@/assets/projects/circle-interview.png";
import ProjectTeaser2 from "@/assets/projects/circle-origon-ui.png";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  { image: ProjectTeaser1, title: "Circle — Interview Platform" },
  { image: ProjectTeaser2, title: "Circle — Origon Chat Interface" },
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

const CURSOR_VARIANTS = {
  default: {
    opacity: 0,
    height: 10,
    width: 10,
    x: -5,
    y: -5,
  },
  active: {
    opacity: 1,
    height: 40,
    width: 40,
    x: -20,
    y: -20,
  },
  pressed: {
    opacity: 1,
    height: 30,
    width: 30,
    x: -15,
    y: -15,
  },
};

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cursorState, setCursorState] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorIcon, setCursorIcon] = useState(null);
  const containerRef = useRef(null);

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

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    const { left, width } = containerRef.current.getBoundingClientRect();
    setCursorIcon(e.clientX < left + width / 2 ? "left" : "right");
  }, []);

  const handleMouseEnter = useCallback(() => setCursorState("active"), []);
  const handleMouseLeave = useCallback(() => {
    setCursorState("default");
    setCursorIcon(null);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <section className="sticky top-0 h-screen w-full p-3">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-card">
        <div ref={containerRef} className="relative flex flex-1">
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
              />
            </motion.div>
          </AnimatePresence>

          <NavigationOverlay
            onPrevious={() => changeSlide(-1)}
            onNext={() => changeSlide(1)}
            setCursorState={setCursorState}
            setCursorIcon={setCursorIcon}
          />
        </div>

        <ProjectInfo
          project={PROJECTS[currentIndex]}
          onPrevious={() => changeSlide(-1)}
          onNext={() => changeSlide(1)}
          isAnimating={isAnimating}
        />
      </div>

      <CustomCursor
        cursorState={cursorState}
        mousePosition={mousePosition}
        cursorIcon={cursorIcon}
      />
    </section>
  );
}

function NavigationOverlay({
  onPrevious,
  onNext,
  setCursorState,
  setCursorIcon,
}) {
  return (
    <div className="absolute inset-0 z-10 grid h-full w-full grid-cols-2">
      <NavigationButton
        onClick={onPrevious}
        onMouseEnter={() => {
          setCursorState("active");
          setCursorIcon("left");
        }}
        onMouseLeave={() => {
          setCursorState("default");
          setCursorIcon(null);
        }}
      />
      <NavigationButton
        onClick={onNext}
        onMouseEnter={() => {
          setCursorState("active");
          setCursorIcon("right");
        }}
        onMouseLeave={() => {
          setCursorState("default");
          setCursorIcon(null);
        }}
      />
    </div>
  );
}

function NavigationButton({ onClick, onMouseEnter, onMouseLeave }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      className="h-full w-full cursor-none focus:outline-none"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    />
  );
}

function ProjectInfo({ project, onPrevious, onNext, isAnimating }) {
  return (
    <div className="flex items-center justify-start gap-5 border-t border-white/10 px-10 py-4">
      <div className="flex items-center gap-2.5">
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
      </div>
      <p className="flex-1">{project.title}</p>
      <button className="w-fit rounded-full bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-white/90 transition duration-200 hover:bg-accent-600 hover:text-white">
        Learn More
      </button>
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
        disabled ? "cursor-not-allowed opacity-50" : "hover:bg-white/20"
      }`}
    >
      <Icon />
    </button>
  );
}

function CustomCursor({ cursorState, mousePosition, cursorIcon }) {
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center rounded-full bg-gray-600 text-white backdrop-blur-lg"
      variants={CURSOR_VARIANTS}
      initial="default"
      animate={cursorState}
      transition={{
        type: "tween",
        ease: "linear",
        duration: cursorState === "pressed" ? 0.4 : 0,
      }}
      style={{
        translateX: mousePosition.x,
        translateY: mousePosition.y,
      }}
    >
      {cursorIcon === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProjectTeaser1 from "@/assets/projects/circle-interview.png";
import ProjectTeaser2 from "@/assets/projects/circle-origon-ui.png";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const projects = [
    { image: ProjectTeaser1, title: "Circle — Interview Platform" },
    { image: ProjectTeaser2, title: "Circle — Origon Chat Interface" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorIcon, setCursorIcon] = useState(null);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const containerRef = useRef(null);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }
  };

  const previousSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(-1);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
      );
    }
  };

  const variants = {
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

  const cursorVariants = {
    default: {
      opacity: 0,
      height: 10,
      width: 10,

      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
    },
    active: {
      opacity: 1,
      height: 40,
      width: 40,

      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    pressed: {
      opacity: 1,
      height: 30,
      width: 30,

      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
    },
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isAnimating) {
        if (event.key === "ArrowLeft") {
          previousSlide();
        } else if (event.key === "ArrowRight") {
          nextSlide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAnimating]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const { left, width } = containerRef.current.getBoundingClientRect();
      if (e.clientX < left + width / 2) {
        setCursorIcon("left");
      } else {
        setCursorIcon("right");
      }
    };

    const handleMouseEnter = () => setCursorVariant("active");
    const handleMouseLeave = () => {
      setCursorVariant("default");
      setCursorIcon(null);
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="sticky top-0 h-screen w-full p-2">
      <div
        ref={containerRef}
        className="flex h-full w-full flex-col overflow-hidden rounded-md bg-card"
      >
        <div className="relative flex flex-1">
          <AnimatePresence
            initial={false}
            custom={direction}
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
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
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 z-10 grid h-full w-full grid-cols-2">
            <button
              onClick={previousSlide}
              className="h-full w-full cursor-none"
              onMouseEnter={() => {
                setCursorVariant("active");
                setCursorIcon("left");
              }}
              onMouseLeave={() => {
                setCursorVariant("default");
                setCursorIcon(null);
              }}
              onMouseDown={() => setIsButtonPressed(true)}
              onMouseUp={() => setIsButtonPressed(false)}
            ></button>

            <button
              onClick={nextSlide}
              className="h-full w-full cursor-none"
              onMouseEnter={() => {
                setCursorVariant("active");
                setCursorIcon("right");
              }}
              onMouseLeave={() => {
                setCursorVariant("default");
                setCursorIcon(null);
              }}
              onMouseDown={() => setIsButtonPressed(true)}
              onMouseUp={() => setIsButtonPressed(false)}
            ></button>
          </div>
        </div>

        <div className="flex items-center justify-start gap-5 border-t border-white/10 px-10 py-4">
          <div className="flex items-center gap-2.5">
            <button
              onClick={previousSlide}
              disabled={isAnimating}
              className={`grid h-7 w-7 place-items-center rounded-full bg-white/10 transition duration-200 ${
                isAnimating
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-white/20"
              }`}
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className={`grid h-7 w-7 place-items-center rounded-full bg-white/10 transition duration-200 ${
                isAnimating
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-white/20"
              }`}
            >
              <ChevronRightIcon />
            </button>
          </div>

          <p className="flex-1">{projects[currentIndex].title}</p>

          <button className="w-fit rounded-full bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-white/90 transition duration-200 hover:bg-accent-600 hover:text-white">
            Learn More
          </button>
        </div>
      </div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center rounded-full bg-gray-600 text-white backdrop-blur-lg"
        variants={cursorVariants}
        initial="default"
        animate={isButtonPressed ? "pressed" : cursorVariant}
        transition={{
          type: "tween",
          ease: "linear",
          duration: isButtonPressed ? 0.4 : 0,
        }}
      >
        {cursorIcon === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </motion.div>
    </section>
  );
}

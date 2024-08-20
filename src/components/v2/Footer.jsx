"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { PROJECTS } from "@/utility/constants";
import { motion } from "framer-motion";

export default function Footer({ currentIndex, setCurrentIndex }) {
  const footerRef = useRef(null);
  const thumbnailRefs = useRef([]);

  useEffect(() => {
    if (footerRef.current && thumbnailRefs.current[currentIndex]) {
      const footer = footerRef.current;
      const activeThumb = thumbnailRefs.current[currentIndex];
      const footerRect = footer.getBoundingClientRect();
      const thumbRect = activeThumb.getBoundingClientRect();

      const scrollLeft =
        activeThumb.offsetLeft - footerRect.width / 2 + thumbRect.width / 2;

      footer.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <footer
      ref={footerRef}
      className="no-scrollbar mt-auto flex items-center gap-5 overflow-x-scroll bg-gray-100 p-5"
    >
      {PROJECTS.map((project, index) => (
        <motion.button
          key={index}
          ref={(el) => (thumbnailRefs.current[index] = el)}
          className={`relative aspect-[2/1] w-40 shrink-0 overflow-hidden rounded ${
            index === currentIndex
              ? "ring-2 ring-accent ring-offset-2 ring-offset-gray-100"
              : ""
          }`}
          whileTap={{ scale: 0.96 }}
          whileHover={{ opacity: index === currentIndex ? 1 : 0.8 }}
          onClick={() => setCurrentIndex(index)}
        >
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={project.image}
            alt={project.title}
            placeholder="blur"
            loading="eager"
            priority={index < 9}
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </motion.button>
      ))}
    </footer>
  );
}

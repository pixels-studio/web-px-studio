"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { PROJECTS } from "@/utility/constants";
import { motion } from "framer-motion";

export default function ProjectGalleryFooter({
  activeProjectIndex,
  setActiveProjectIndex,
}) {
  const galleryFooterRef = useRef(null);
  const projectThumbnailRefs = useRef([]);

  const scrollToActiveProject = useCallback(() => {
    if (
      galleryFooterRef.current &&
      projectThumbnailRefs.current[activeProjectIndex]
    ) {
      const footer = galleryFooterRef.current;
      const activeThumbnail = projectThumbnailRefs.current[activeProjectIndex];
      const footerRect = footer.getBoundingClientRect();
      const thumbnailRect = activeThumbnail.getBoundingClientRect();

      const scrollPosition =
        activeThumbnail.offsetLeft -
        footerRect.width / 2 +
        thumbnailRect.width / 2;

      footer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeProjectIndex]);

  useEffect(() => {
    scrollToActiveProject();
  }, [scrollToActiveProject]);

  return (
    <footer
      ref={galleryFooterRef}
      className="no-scrollbar mt-auto flex items-center gap-5 overflow-x-scroll bg-gray-100 p-5"
    >
      {PROJECTS.map((project, index) => (
        <ProjectThumbnail
          key={project.id || index}
          project={project}
          index={index}
          isActive={index === activeProjectIndex}
          onClick={() => setActiveProjectIndex(index)}
          ref={(el) => (projectThumbnailRefs.current[index] = el)}
        />
      ))}
    </footer>
  );
}

const ProjectThumbnail = React.forwardRef(
  ({ project, index, isActive, onClick }, ref) => (
    <motion.button
      ref={ref}
      className={`relative aspect-[2/1] w-40 shrink-0 overflow-hidden rounded ${
        isActive ? "ring-2 ring-accent ring-offset-2 ring-offset-gray-100" : ""
      }`}
      whileTap={{ scale: 0.96 }}
      whileHover={{ opacity: isActive ? 1 : 0.8 }}
      onClick={onClick}
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
  ),
);

ProjectThumbnail.displayName = "ProjectThumbnail";

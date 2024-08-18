"use client";

import React from "react";
import { delay, motion } from "framer-motion";

export default function Services() {
  const SERVICES = [
    {
      id: 1,
      label: "Web Design",
      accentClass: "bg-[#BFD834] text-black",
    },
    {
      id: 2,
      label: "App Design",
      accentClass: "bg-[#3C9719]",
    },
    {
      id: 3,
      label: "Design System",
      accentClass: "bg-[#BFD834] text-black",
    },
    {
      id: 4,
      label: "Web Development",
      accentClass: "bg-[#3C9719]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        variants={itemVariants}
        className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70"
      >
        What I do
      </motion.h2>
      <motion.p variants={itemVariants} className="mb-5 text-lg">
        I design and build user-friendly, visually appealing digital products.
        My work covers all aspects of creating cohesive and functional
        experiences.
      </motion.p>

      <motion.ul
        className="grid grid-cols-1 gap-3"
        role="list"
        variants={containerVariants}
      >
        {SERVICES.map((service) => {
          return (
            <motion.li
              variants={itemVariants}
              className="text-md flex items-center gap-3 rounded-lg bg-card p-3"
              key={service.id}
            >
              <div
                className={`grid h-6 w-6 place-items-center rounded-full text-center text-sm ${service.accentClass}`}
              >
                {service.id}
              </div>
              <p>{service.label}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.section>
  );
}

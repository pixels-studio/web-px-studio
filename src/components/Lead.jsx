"use client";

import React from "react";
import { motion } from "framer-motion";
import { Logo } from "./Icons";

export default function Lead() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
      className="flex flex-col gap-10 text-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Logo />
      </motion.div>
      <motion.div className="flex flex-col gap-3" variants={itemVariants}>
        <h1>Hi, I'm Abhishek.</h1>
        <p className="text-white/70">
          Interface designer from Mumbai with 8 years of experience. I create
          intuitive designs and currently working as Senior Designer at
          Samespace.
        </p>
        <p className="text-white/70">
          Whether you need a design system or a website, I'm here to help
        </p>
      </motion.div>

      <motion.a
        variants={itemVariants}
        className="border-accent text-accent hover:bg-accent w-fit rounded-full border-2 bg-transparent px-4 py-1.5 text-sm font-semibold uppercase tracking-wide hover:text-black"
        href="mailto:abhi@pixels.studio"
      >
        Let's Work Together
      </motion.a>
    </motion.section>
  );
}

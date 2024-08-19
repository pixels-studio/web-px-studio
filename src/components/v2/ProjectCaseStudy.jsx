import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCaseStudy({ project, onClose }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.26, 0.08, 0.25, 1],
      },
    },
  };

  return (
    <section>
      <div className="mx-auto w-full max-w-[1000px]">
        <motion.div
          layoutId={project.title}
          className="relative mb-20 aspect-[2/1] w-full bg-black"
        >
          <Image
            onClick={onClose}
            className="absolute inset-0 h-full w-full rounded-none object-cover"
            src={project.image}
            alt={project.title}
          />
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-[640px] text-2xl/10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="mb-20" variants={itemVariants}>
            You don't need to know someone, or have an agent, or have a name to
            contribute to Unsplash. We're the place where creators meet their
            audience, where individuals become a community and where anyone can
            become a source for creativity. So whether you're new to photography
            or consider yourself a pro—your photos or illustrations are welcome
            here.
          </motion.p>

          <motion.h2 className="mb-3 font-bold" variants={itemVariants}>
            Powering the internet's visuals
          </motion.h2>
          <motion.p className="mb-20" variants={itemVariants}>
            How we started? The concept was simple. Unsplash was born from the
            pain we had in finding great, usable imagery. Today, Unsplash is a
            platform fuelled by a community who give their work for free in
            support of the creatives everywhere. Without them, none of this
            would be possible.
          </motion.p>

          <motion.h2 className="mb-3 font-bold" variants={itemVariants}>
            Anyone can join the Unsplash community
          </motion.h2>
          <motion.p className="mb-20" variants={itemVariants}>
            We're the place where creators meet their audience, where
            individuals become a community and where anyone can become a source
            for creativity. So whether you're new to photography or consider
            yourself a pro—your photos or illustrations are welcome here.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

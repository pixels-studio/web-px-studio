"use client";
import { Inter } from "next/font/google";

import { useCallback, useState } from "react";
import Footer from "@/components/v2/Footer";
import Header from "@/components/v2/Header";
import Projects from "@/components/v2/Projects";
import { PROJECTS } from "@/utility/constants";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBio, setShowBio] = useState(false);

  const changeSlide = (direction) => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + direction + PROJECTS.length) % PROJECTS.length,
    );
  };

  return (
    <div className={inter.className}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: showBio ? 0.9 : 1 }}
        transition={{
          duration: 0.4,
          delay: !showBio ? 0.2 : 0,
          ease: [0.26, 0.08, 0.25, 1],
        }}
        className="flex h-screen w-full flex-col"
      >
        <Header showBio={showBio} toggleBioModal={setShowBio} />
        <Projects currentIndex={currentIndex} changeSlide={changeSlide} />
        <Footer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </motion.main>
    </div>
  );
}

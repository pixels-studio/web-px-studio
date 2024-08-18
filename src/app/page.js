"use client";
import { Inter } from "next/font/google";

import { useCallback, useEffect, useState } from "react";
import Footer from "@/components/v2/Footer";
import Header from "@/components/v2/Header";
import Projects from "@/components/v2/Projects";
import { PROJECTS } from "@/utility/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [showBio, setShowBio] = useState(false);

  const changeSlide = (direction) => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + direction + PROJECTS.length) % PROJECTS.length,
    );
  };

  return (
    <div className={inter.className}>
      <AnimatePresence>
        {activeProject ? (
          <section>
            <div className="mx-auto w-full max-w-[1000px]">
              <motion.div
                layoutId={activeProject.title}
                className="relative aspect-[2/1] w-full bg-black"
              >
                <Image
                  onClick={() => setActiveProject(null)}
                  className="absolute inset-0 h-full w-full rounded-none object-cover"
                  src={activeProject.image}
                  alt={activeProject.title}
                />
              </motion.div>
              <motion.h1 className="text-sm font-semibold uppercase tracking-wide">
                {activeProject.title}
              </motion.h1>
            </div>
          </section>
        ) : (
          <motion.main className="flex h-screen w-full flex-col">
            <Header showBio={showBio} toggleBioModal={setShowBio} />
            <Projects
              openProject={setActiveProject}
              currentIndex={currentIndex}
              changeSlide={changeSlide}
            />
            <Footer
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

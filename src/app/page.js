"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import Footer from "@/components/v2/Footer";
import Header from "@/components/v2/Header";
import Projects from "@/components/v2/Projects";
import { PROJECTS } from "@/utility/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ProjectCaseStudy from "@/components/v2/ProjectCaseStudy";

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
          <ProjectCaseStudy
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
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

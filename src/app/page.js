"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import Footer from "@/components/v2/Footer";
import Header from "@/components/v2/Header";
import Projects from "@/components/v2/Projects";
import { PROJECTS } from "@/utility/constants";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCaseStudy from "@/components/v2/ProjectCaseStudy";
import Head from "next/head";

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
      <Head>
        {PROJECTS.map((project, index) => (
          <link key={index} rel="preload" href={project.image} as="image" />
        ))}
      </Head>

      <AnimatePresence mode="wait">
        {activeProject ? (
          <ProjectCaseStudy
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        ) : (
          <motion.main
            initial={{ scale: 1 }}
            animate={{ scale: showBio ? 0.96 : 1 }}
            transition={{
              duration: 0.4,
              ease: [0.26, 0.08, 0.25, 1],
            }}
            className="flex h-screen w-full flex-col"
          >
            <Header
              showBio={showBio}
              isCaseStudyOpened={activeProject !== null}
              toggleBioModal={setShowBio}
            />
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

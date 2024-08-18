"use client";

import { useState } from "react";
import Footer from "@/components/v2/Footer";
import Header from "@/components/v2/Header";
import Projects from "@/components/v2/Projects";
import { PROJECTS } from "@/utility/constants";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeSlide = (direction) => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + direction + PROJECTS.length) % PROJECTS.length,
    );
  };

  return (
    <main className="flex h-screen w-full flex-col">
      <Header />
      <Projects currentIndex={currentIndex} changeSlide={changeSlide} />
      <Footer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { Logo } from "../Icons";
import Image from "next/image";
import ProfilePic from "@/assets/profile-pic.png";
import * as Dialog from "@radix-ui/react-dialog";
import Bio from "./Bio";
import { AnimatePresence, motion } from "framer-motion";

export default function Header({ showBio, toggleBioModal, isCaseStudyOpened }) {
  return (
    <motion.header
      initial={{
        y: isCaseStudyOpened ? "100%" : "0%",
        opacity: isCaseStudyOpened ? 0 : 1,
      }}
      animate={{
        y: isCaseStudyOpened ? "100%" : "0%",
        opacity: isCaseStudyOpened ? 0 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0.26, 0.08, 0.25, 1],
      }}
      className="sticky top-0 bg-white p-5"
    >
      <div className="absolute">
        <Logo />
      </div>
      <div className="mx-auto flex w-full max-w-[1000px] items-end justify-between">
        <div className="flex items-center gap-3">
          <Image
            className="aspect-square w-10 rounded"
            src={ProfilePic}
            alt="Profile photo of Abhishek Kambli"
          />
          <div>
            <h1 className="text-sm font-semibold uppercase tracking-wide">
              Abhishek Kambli
            </h1>
            <p className="text-sm font-semibold uppercase tracking-wide text-black/50">
              Designing delightful digital experiences ·{" "}
              <span className="text-accent">open for work</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <Dialog.Root open={showBio} onOpenChange={toggleBioModal}>
            <Dialog.Trigger asChild>
              <button className="text-sm font-semibold uppercase tracking-wide text-black/50 outline-none transition-all duration-200 hover:text-black active:scale-95">
                About
              </button>
            </Dialog.Trigger>

            <Dialog.Portal forceMount>
              <AnimatePresence>
                {showBio && (
                  <>
                    <Dialog.Overlay className="fixed inset-0 z-30 bg-white" />
                    <Dialog.Content asChild>
                      <motion.section
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.26, 0.08, 0.25, 1],
                        }}
                        className="fixed inset-0 z-40 overflow-y-auto"
                      >
                        <Dialog.Close className="fixed left-5 top-5 outline-none">
                          <Logo />
                        </Dialog.Close>

                        <Dialog.Close className="fixed right-5 top-5 rounded-full bg-black/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-wider outline-none">
                          Back
                        </Dialog.Close>

                        <Bio />
                      </motion.section>
                    </Dialog.Content>
                  </>
                )}
              </AnimatePresence>
            </Dialog.Portal>
          </Dialog.Root>

          <button className="text-sm font-semibold uppercase tracking-wide text-black/50 transition-all duration-200 hover:text-black active:scale-95">
            hey@pixels.studio
          </button>
        </div>
      </div>
    </motion.header>
  );
}

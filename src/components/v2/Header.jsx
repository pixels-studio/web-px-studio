import React from "react";
import { Logo } from "../Icons";
import Image from "next/image";
import ProfilePic from "@/assets/profile-pic.png";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white p-5">
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
          <button className="text-sm font-semibold uppercase tracking-wide text-black/50 transition-all duration-200 hover:text-black active:scale-95">
            About
          </button>
          <button className="text-sm font-semibold uppercase tracking-wide text-black/50 transition-all duration-200 hover:text-black active:scale-95">
            hey@pixels.studio
          </button>
        </div>
      </div>
    </header>
  );
}

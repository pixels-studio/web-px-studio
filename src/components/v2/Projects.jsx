import React from "react";
import ProjectTeaser from "@/assets/projects/unsplash.png";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="flex flex-1 items-center justify-center px-10 py-10">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-5">
        <div className="relative aspect-[2/1] w-full overflow-hidden rounded">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={ProjectTeaser}
            alt="Unsplash"
          />
        </div>

        <div className="flex items-end justify-between">
          <div className="flex-1 text-sm font-semibold uppercase tracking-wide">
            <p>Unsplash App</p>
            <p className="text-black/50">
              Redesigned for intuitive mobile experience and visual impact.
            </p>
          </div>

          <button className="bg-accent rounded-full px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200">
            View Case Study
          </button>
        </div>
      </div>
    </section>
  );
}

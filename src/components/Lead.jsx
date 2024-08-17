import React from "react";
import { Logo } from "./Icons";

export default function Lead() {
  return (
    <section className="flex flex-col gap-10 text-lg">
      <Logo />
      <div className="flex flex-col gap-3">
        <h1>Hi, I’m Abhishek.</h1>
        <p className="text-white/70">
          Interface designer from Mumbai with 8 years of experience. I create
          intuitive designs and currently working as Senior Designer at
          Samespace.
        </p>
        <p className="text-white/70">
          Whether you need a design system or a website, I’m here to help
        </p>
      </div>

      <a
        className="w-fit rounded-full border border-accent-600 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent-600 transition duration-200 hover:bg-accent-600 hover:text-white"
        href="mailto:abhi@pixels.studio"
      >
        Let’s Work Together
      </a>
    </section>
  );
}

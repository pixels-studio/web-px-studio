import Image from "next/image";
import React from "react";
import ProfilePhoto from "@/assets/me.png";

export default function Bio() {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-white/70">
        Life Beyond Pixels
      </h2>

      <Image className="rounded" src={ProfilePhoto} alt="Abhishek Kambli" />

      <p className="text-lg text-white/70">
        When I’m not designing, I’m reading, listening to music or podcasts, or
        playing cricket. My work has been featured on Minimal Gallery, One Page
        Love, and Product Hunt, reflecting the quality and impact of my designs.
      </p>
    </section>
  );
}

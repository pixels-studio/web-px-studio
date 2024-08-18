import React from "react";

export default function ProjectCaseStudy({ project, onClose }) {
  return (
    <section>
      <div className="mx-auto w-full max-w-[1000px]">
        <motion.div
          layoutId={project.title}
          className="relative mb-20 aspect-[2/1] w-full bg-black"
        >
          <Image
            onClick={onClose}
            className="absolute inset-0 h-full w-full rounded-none object-cover"
            src={project.image}
            alt={project.title}
          />
        </motion.div>

        <div className="mx-auto w-full max-w-[640px] text-2xl/10">
          <p className="mb-20">
            You don’t need to know someone, or have an agent, or have a name to
            contribute to Unsplash. We’re the place where creators meet their
            audience, where individuals become a community and where anyone can
            become a source for creativity. So whether you’re new to photography
            or consider yourself a pro—your photos or illustrations are welcome
            here.
          </p>

          <h2 className="mb-3 font-bold">Powering the internet’s visuals</h2>
          <p className="mb-20">
            How we started? The concept was simple. Unsplash was born from the
            pain we had in finding great, usable imagery. Today, Unsplash is a
            platform fuelled by a community who give their work for free in
            support of the creatives everywhere. Without them, none of this
            would be possible.
          </p>

          <h2 className="mb-3 font-bold">
            Anyone can join the Unsplash community
          </h2>
          <p className="mb-20">
            We’re the place where creators meet their audience, where
            individuals become a community and where anyone can become a source
            for creativity. So whether you’re new to photography or consider
            yourself a pro—your photos or illustrations are welcome here.
          </p>
        </div>
      </div>
    </section>
  );
}

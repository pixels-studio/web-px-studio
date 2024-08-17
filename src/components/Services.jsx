import React from "react";

export default function Services() {
  const SERVICES = [
    {
      id: 1,
      label: "Web Design",
      accentClass: "bg-accent-300 text-black",
    },
    {
      id: 2,
      label: "App Design",
      accentClass: "bg-accent-500 text-black",
    },
    {
      id: 3,
      label: "Design System",
      accentClass: "bg-accent-700",
    },
    {
      id: 4,
      label: "Web Development",
      accentClass: "bg-accent-900",
    },
  ];

  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
        What I do
      </h2>
      <p className="mb-5 text-lg">
        I design and build user-friendly, visually appealing digital products.
        My work covers all aspects of creating cohesive and functional
        experiences.
      </p>

      <ul className="grid grid-cols-1 gap-3" role="list">
        {SERVICES.map((service) => {
          return (
            <li
              className="text-md flex items-center gap-3 rounded-lg bg-card p-3"
              key={service.id}
            >
              <div
                className={`grid h-6 w-6 place-items-center rounded-full text-center text-sm ${service.accentClass}`}
              >
                {service.id}
              </div>
              <p>{service.label}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

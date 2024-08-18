import React from "react";
import {
  BehanceIcon,
  ChevronRightIcon,
  DribbbleIcon,
  FigmaIcon,
  InstagramIcon,
  LinkedInIcon,
  ReadCVIcon,
  SaveeIcon,
  TwitterIcon,
} from "./Icons";

export default function Contact() {
  const SOCIALS = [
    {
      id: 1,
      title: "Dribbble",
      link: "",
      icon: <DribbbleIcon />,
    },
    {
      id: 2,
      title: "Behance",
      link: "",
      icon: <BehanceIcon />,
    },
    {
      id: 3,
      title: "Twitter",
      link: "",
      icon: <TwitterIcon />,
    },
    {
      id: 4,
      title: "Instagram",
      link: "",
      icon: <InstagramIcon />,
    },
    {
      id: 5,
      title: "LinkedIn",
      link: "",
      icon: <LinkedInIcon />,
    },
    {
      id: 6,
      title: "Read.CV",
      link: "",
      icon: <ReadCVIcon />,
    },
    {
      id: 7,
      title: "Savee",
      link: "",
      icon: <SaveeIcon />,
    },
    {
      id: 8,
      title: "Figma",
      link: "",
      icon: <FigmaIcon />,
    },
  ];

  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
        Let's Collaborate
      </h2>
      <p className="mb-10 text-lg">
        I’m seeking full-time or freelance opportunities. If my work resonates
        with you, let’s bring your ideas to life. Reach out to me at{" "}
        <a
          className="text-accent inline-flex overflow-hidden"
          href="mailto:abhi@pixels.studio"
        >
          abhi@pixels.studio
        </a>
      </p>

      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">
        Elsewhere
      </h2>

      <ul className="grid grid-cols-2 gap-3" role="list">
        {SOCIALS.map((social) => {
          return (
            <li key={social.id}>
              <a
                href={social.link}
                className="flex items-center justify-start gap-3 rounded-md bg-card p-3 text-lg"
              >
                <div>{social.icon}</div>
                <div className="flex-1">{social.title}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

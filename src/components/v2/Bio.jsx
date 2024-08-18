import React from "react";
import CoverImage from "@/assets/me.png";
import Image from "next/image";
import {
  BehanceIcon,
  DribbbleIcon,
  FigmaIcon,
  InstagramIcon,
  LinkedInIcon,
  ReadCVIcon,
  SaveeIcon,
  TwitterIcon,
} from "../Icons";
import { Dialog } from "@radix-ui/react-dialog";

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

export default function Bio() {
  return (
    <section className="mx-auto flex w-full max-w-[640px] flex-col gap-10 pb-10 text-2xl/10">
      <Image
        src={CoverImage}
        quality={100}
        placeholder="blur"
        alt="Profile photo of Abhishek Kambli"
      />
      <h2 className="font-bold">
        A designer and developer—helping people shape digital products and
        visual systems.
      </h2>
      <p>
        I’m a India-based designer specializing in interrelating humans and
        technology through reductive design and code. Over the last decade, I’ve
        had the pleasure of helping people build companies, develop brands, and
        digital products with a focus on simplicity, interactions, and
        scalability.
      </p>
      <p>
        Currently shaping the future of team collaboration as the Senior
        Designer at Samespace.
      </p>
      <p>
        My work has been featured on Minimal Gallery, One Page Love, and Product
        Hunt, reflecting the quality and impact of my designs.
      </p>

      <p>
        When I’m not designing, I’m reading, listening to music or podcasts, or
        playing cricket.
      </p>

      <p>You can reach out to me on abhi@pixels.studio or find me online on</p>

      <ul className="grid grid-cols-2 gap-5" role="list">
        {SOCIALS.map((social) => {
          return (
            <li key={social.id}>
              <a
                href={social.link}
                className="flex items-center justify-start gap-4 rounded-md bg-gray-100 p-4 text-2xl"
              >
                <div>{social.icon}</div>
                <div className="flex-1">{social.title}</div>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="text-base text-black/50">© 2024 pixels studio</p>
    </section>
  );
}

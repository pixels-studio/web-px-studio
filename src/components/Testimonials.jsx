import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import Image from "next/image";
import RajaProfilePhoto from "@/assets/raja.png";
import JamesProfilePhoto from "@/assets/james.png";
import KarthikProfilePhoto from "@/assets/karthik.png";

export default function Testimonials() {
  const TESTIMONIALS = [
    {
      id: 1,
      quote: (
        <>
          I had a memorable time working with Abhi; his grasp on UI and UX
          design theory was evident.{" "}
          <span className="bg-accent/20 text-accent rounded px-0.5 text-lg/6">
            He was a notable asset
          </span>{" "}
          to the tlkn app with relentless motivation towards creating a perfect
          product.
        </>
      ),
      person: {
        name: "Raja Sandhu",
        designation: "Cofounder, tlkn",
        image: RajaProfilePhoto,
      },
    },
    {
      id: 2,
      quote: (
        <>
          Abhishek's skill in interface design is truly notable. He has a{" "}
          <span className="bg-accent/20 text-accent rounded px-0.5 text-lg/6">
            great ability to grasp our ideas
          </span>{" "}
          and change them into fantastic designs. The way he turns thoughts into
          eye-catching designs shows his natural design talent.
        </>
      ),
      person: {
        name: "James Khan",
        designation: "CEO, Lyra",
        image: JamesProfilePhoto,
      },
    },
    {
      id: 3,
      quote: (
        <>
          Abhishek is a{" "}
          <span className="bg-accent/20 text-accent rounded px-0.5 text-lg/6">
            versatile designer
          </span>{" "}
          skilled in solving open-ended problems. His attention to detail,
          strong work ethic, and intuitive understanding of software development
          make him a pleasure to work with.
        </>
      ),
      person: {
        name: "Karthik Iyengar",
        designation: "Cofounder, WeBuildProducts",
        image: KarthikProfilePhoto,
      },
    },
  ];

  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-white/70">
        What they say
      </h2>

      <ul role="list">
        {TESTIMONIALS.map((testimonial) => {
          return (
            <li
              className="grid grid-cols-1 gap-5 py-5 text-lg first-of-type:pt-5"
              key={testimonial.id}
            >
              <p className="rounded-2xl rounded-bl-md bg-card p-4">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-3">
                <Image
                  className="h-6 w-6 rounded-full"
                  src={testimonial.person.image}
                  alt={testimonial.person.name}
                />

                <p>
                  {testimonial.person.name},{" "}
                  <span className="text-white/70">
                    {testimonial.person.designation}
                  </span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

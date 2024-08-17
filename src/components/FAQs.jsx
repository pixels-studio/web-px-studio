import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { PlusIcon } from "./Icons";

export default function FAQs() {
  const FAQS = [
    {
      id: 1,
      question: "What types of projects do you work on?",
      answer:
        "I can help you with web design, app design, web development, and design systems.",
    },
    {
      id: 2,
      question: "What is your design process?",
      answer:
        "I consult with clients, understand their needs, conduct market research, create designs, and maintain a close feedback loop.",
    },
    {
      id: 3,
      question: "How do you handle revisions?",
      answer:
        "I incorporate feedback throughout the process to ensure the final design aligns with your expectations.",
    },
    {
      id: 4,
      question: "Do you do freelance work?",
      answer:
        "Yes, I’m open to freelance opportunities. Feel free to reach out.",
    },
  ];

  return (
    <section>
      <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/70">
        Commonly Asked Questions
      </h2>

      <Accordion.Root
        className="grid grid-cols-1 gap-3"
        defaultValue={`faq-1`}
        collapsible
      >
        {FAQS.map((faq) => {
          return (
            <Accordion.Item
              className="flex flex-col gap-2 rounded-md bg-card p-3 text-lg"
              value={`faq-${faq.id}`}
              key={faq.id}
            >
              <Accordion.Trigger className="group flex w-full items-center justify-start gap-2 outline-none">
                <p className="flex-1 text-left">{faq.question}</p>
                <div className="grid h-6 w-6 transform place-items-center text-accent-600 transition-all duration-200 group-data-[state=open]:rotate-45">
                  <PlusIcon />
                </div>
              </Accordion.Trigger>
              <Accordion.Content className="text-white/70">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </section>
  );
}

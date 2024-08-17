import React from "react";
import Lead from "./Lead";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Bio from "./Bio";
import FAQs from "./FAQs";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Sidebar() {
  return (
    <aside className="px-6 py-10 pb-6">
      <div className="mx-auto flex w-full max-w-[400px] flex-col gap-[120px]">
        <Lead />
        <Services />
        <Testimonials />
        <Bio />
        <FAQs />
        <Contact />
        <Footer />
      </div>
    </aside>
  );
}

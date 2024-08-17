import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-lg text-white/40">
      © {currentYear} pixels studio
    </footer>
  );
}

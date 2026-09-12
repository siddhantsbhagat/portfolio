"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import GitHubActivity from "@/components/sections/GitHubActivity";
import OffTheClock from "@/components/sections/OffTheClock";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState("black");
  const isWhite = theme === "white";
  const pageBg = isWhite ? "bg-[#f8f9fa]" : "bg-[#100f0f]";
  const textColor = isWhite ? "text-[#1a1a1a]" : "text-white";

  return (
    <main className={`relative w-full min-h-screen ${pageBg} ${textColor} transition-colors duration-500`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="flex flex-col pt-24">
        <Hero theme={theme} />
        <Projects theme={theme} />
        <GitHubActivity theme={theme} />
        <OffTheClock theme={theme} />
        <Footer theme={theme} />
      </div>
    </main>
  );
}

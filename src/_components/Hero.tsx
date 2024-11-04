"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function Hero() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-xl md:text-6xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white text-center font-sans font-bold whitespace-nowrap">
          Young Researchers&apos; Conclave
        </h1>
        <p className="text-white max-w-lg mx-auto my-2 text-sm md:text-lg text-center relative z-10">
          Prospects of Humanities and Science in the Next Decade for Sustainable Development of Human Life
        </p>
        <p className="text-white max-w-lg mx-auto mt-6 text-md md:text-lg lg:text-xl text-center relative z-10 font-semibold">
          Organised by <br />
          Assam University Research Scholars&apos; Forum (AURSF)
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}

"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/hero.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white space-y-6 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif">
          International Young Researchers&apos; Conclave
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-sans">
          Prospects of Humanities and Science in the Next Decade for Sustainable
          Development of Human Life
        </p>
        <p className="text-md sm:text-lg font-sans">
          Organised by <span className="font-semibold">Assam University Research Scholars&apos; Forum (AURSF)</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;

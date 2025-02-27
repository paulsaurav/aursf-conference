"use client";
import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 md:px-12">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-wide leading-tight">
          International Young Researchers&apos; Conclave <br />
          <span className="block">and Rural Science Congress (IYRCRSC-2025)</span>
        </h1>

        

        {/* Organizer Details */}
        <p className="text-2xl font-bold mt-8 max-w-4xl mx-auto leading-relaxed">
          Organised by{" "} <br />
          <span className="font-bold">
            Assam University Research Scholars&apos; Forum (AURSF)
          </span>, in collaboration with{" "}
          <span className="font-bold">
            Internal Quality Assurance Cell (IQAC), Assam University, Silchar
          </span>, and{" "}
          <span className="font-bold">
            Prof. H. S. Srivastava Foundation for Science & Society
          </span>.
          <br />
        <p>on</p>
        </p>
       
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl mt-6 font-light max-w-3xl mx-auto leading-relaxed">
          Integrating Science, Society, and Culture <br />
          for a Sustainable Future
        </p>
        <br />
        <h2 className="text-3xl font-bold">Date: 6th to 8th March 2025</h2>
        <br />
        <Link href={"/brochure.pdf"}><button className="btn btn-active btn-secondary">Download Brochure</button></Link>
        
      </div>
    </div>
  );
};

export default Hero;

"use client"
import React from "react";

const Motivation = () => {
  return (
    <div className="w-full bg-white text-black py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Eureka Spectrum</h2>
        <p className="text-gray-800 text-center leading-relaxed mb-6">
          A space to showcase innovations, new ideas and artistics expressions.
        </p>
        <p className="text-gray-800 text-justify leading-relaxed mb-6">
        Eureka Spectrum is a vibrant confluence of creativity, innovation, and enterprise, open to both university scholars and innovators from beyond its campus. This dynamic exhibition offers a platform to showcase groundbreaking innovations, an art gallery to celebrate and sell creative works, and opportunities for startups to display their visionary ideas. With industry product displays, promotional spaces, engaging discussions, and a variety of food stalls, Eureka Spectrum fosters collaboration between academia, business, and the creative arts. Welcoming participants from diverse backgrounds, with proper sponsorships, it&apos;s more than an expo—it&apos;s a celebration of ingenuity and a catalyst for new opportunities.
        </p>
        <br />
        <p>To know more <a href="/contact-us" className="text-blue-600">Contact Us</a></p>
      </div>
    </div>
  );
};

export default Motivation;

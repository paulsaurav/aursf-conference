import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Copyright Section */}
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Assam University Research Scholar Forum. All rights reserved.
          </p>
        </div>

        {/* Developer Credit */}
        <div className="text-center">
          <p className="text-sm md:text-base">
            Designed and developed by{" "}
            <a
              href="https://www.linkedin.com/in/saurav-paul-0239221b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors"
            >
              Saurav Paul
            </a>, Research Scholar, Department of Computer Science
          </p>
        </div>

        {/* LinkedIn Icon */}
        <div className="flex items-center space-x-2">
          <a
            href="https://www.linkedin.com/in/saurav-paul-0239221b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

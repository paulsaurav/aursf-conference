"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white text-black px-6 lg:px-24 py-6 border-b border-gray-300 flex flex-col items-center">
        {/* Top Section with Logos */}
        <div className="w-full flex items-center justify-between gap-8 pb-4 border-b border-gray-300">
          <div className="text-[2rem] font-bold text-blue-900"><h2>Assam University</h2></div>
          <div className="flex flex-row"><Link href="https://aursf.in/" target="_blank">
            <Image src="/logo-aursf.png" alt="AURSF Logo" width={80} height={80} />
          </Link>
          <Link href="/" target="_blank">
            <Image src="/auslogo.png" alt="AUS Logo" width={80} height={80} />
          </Link>
          <Link href="http://aus.ac.in" target="_blank">
            <Image src="/another.png" alt="Another Logo" width={80} height={80} />
          </Link></div>
          
          
        </div>

        {/* Mobile View Dropdown */}
        <div className="navbar-start lg:hidden mt-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/call-for-paper">Call For Paper</Link>
              </li>
              <li>
                <Link href="/committee">Committee</Link>
              </li>
              <li>
                <Link href="/important-dates">Important Dates</Link>
              </li>
              <li>
                <Link href="/registration">Registration</Link>
              </li>
              <li>
                <Link href="/keynote-speakers">Keynote Speakers</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/sponsorship-opportunities">Sponsorship Opportunities</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Navigation Items */}
        <div className="navbar-center hidden lg:flex mt-6">
          <ul className="menu menu-horizontal px-1 z-50">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/call-for-paper">Call For Paper</Link>
            </li>
            <li>
              <Link href="/committee">Committee</Link>
            </li>
            <li>
              <Link href="/important-dates">Important Dates</Link>
            </li>
            <li>
              <Link href="/registration">Registration</Link>
            </li>
            <li>
              <Link href="/keynote-speakers">Keynote Speakers</Link>
            </li>
            <li>
                <Link href="/sponsorship-opportunities">Sponsorship Opportunities</Link>
              </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

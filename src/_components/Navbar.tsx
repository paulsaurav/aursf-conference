import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white text-black px-24 py-6 border-b border-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src="/logo-aursf.png" alt="logo" width={60} height={60} />
          </Link>
          <Link href="/" className="btn btn-ghost text-xl">
            AURSF-Conference
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
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
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src="/aus-logo.png" alt="logo" width={200} height={200} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

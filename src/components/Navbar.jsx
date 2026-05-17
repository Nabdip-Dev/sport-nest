"use client";

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link href="/" className="hover:text-lime-400 transition duration-300">
          Home
        </Link>
      </li>

      <li>
        <Link href="/all-facilities" className="hover:text-lime-400">
          All Facilities
        </Link>
      </li>

      <li>
        <Link href="/my-bookings" className="hover:text-lime-400">
          My Bookings
        </Link>
      </li>

      <li>
        <Link href="/add-facility" className="hover:text-lime-400">
          Add Facility
        </Link>
      </li>

      <li>
        <Link href="/manage-my-facilities" className="hover:text-lime-400">
          Manage Facilities
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="w-11/12 mx-auto">
        <div className="navbar px-0 py-4">

          {/* Left */}
          <div className="navbar-start">

            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-white text-xl"
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>

              {open && (
                <ul className="absolute mt-4 z-50 p-5 shadow-2xl bg-[#111827] rounded-2xl w-64 space-y-4 text-white">
                  {links}
                </ul>
              )}
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center font-bold text-black text-xl">
                S
              </div>

              <h1 className="text-2xl font-black text-white">
                Sport<span className="text-lime-400">Nest</span>
              </h1>
            </Link>
          </div>

          {/* Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-8 text-gray-300 font-medium">
              {links}
            </ul>
          </div>

          {/* Right */}
          <div className="navbar-end">
            <Link href="/login">
              <button className="px-6 py-3 rounded-full bg-lime-400 text-black font-bold hover:scale-105 transition duration-300">
                Login
              </button>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
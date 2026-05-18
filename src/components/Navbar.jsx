"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineOpenInBrowser, MdWavingHand } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  // backend/auth related code removed
  const user = null;
  const isPending = false;

  const pathname = usePathname();

  return (
    <div className="navbar bg-white shadow-md px-6 sticky top-0 z-50">

      {/* Left - Logo */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown dropdown-start md:hidden -ml-4 relative">
          <label tabIndex={0} className="btn btn-ghost text-[#2563eb]">
            ☰
          </label>

          <ul className="menu dropdown-content mt-3 p-2 shadow bg-white rounded-box w-40 z-50">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/facilities">Facilities</NavLink></li>
            <li><NavLink href="/my-booking">My Bookings</NavLink></li>
            <li><NavLink href="/add-facilities">Add Facility</NavLink></li>
            <li><NavLink href="/manage-facilities">Manage Facilities</NavLink></li>
            {user && <li><NavLink href="/my-profile">My Profile</NavLink></li>}
          </ul>
        </div>

        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide"
        >
          <span className="text-[#0f172a]">SPORT</span>
          <span className="text-[#2563eb]">NEST</span>
        </Link>

      </div>

      {/* Center - Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-3 font-medium">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/facilities">Facilities</NavLink></li>
          <li><NavLink href="/my-bookings">My Bookings</NavLink></li>
          <li><NavLink href="/add-facility">Add Facility</NavLink></li>
           <li><NavLink href="/manage-facilities">Manage Facilities</NavLink></li>
          {user && (
            <li>
              <NavLink href="/my-profile">
                <CgProfile />
                My Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* Right - Auth */}
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-bars loading-sm text-orange-500"></span>
        ) : user ? (
          <>
            <div className="px-4">
              <h1 className="hidden md:flex flex-col items-center gap-1">
                <span className="flex items-center text-[#300f00] font-semibold">
                  Hello
                  <MdWavingHand />
                </span>

                <span className="font-bold text-[#ff5e00]">
                  “User”
                </span>
              </h1>
            </div>

            <img
              src="https://i.ibb.co/4pDNDk1/avatar.png"
              alt="user"
              className="z-10 w-8 h-8 rounded-full -mr-11 object-cover"
            />

            <button
              className="flex items-center gap-1 font-semibold relative pl-13 pr-4 py-1 text-[#331300b6] hover:text-white text-lg border-1 border-[#331300b6] hover:border-transparent hover:bg-gradient-to-r from-[#fb5c00] to-[#ff7a1a] rounded-full overflow-hidden
              before:content-[''] before:absolute before:top-1/2 before:left-0
              before:w-11 before:h-11 before:bg-white
              before:rounded-full before:-translate-x-1/12 before:-translate-y-1/2 cursor-pointer"
            >
              <IoIosLogOut />
              logout
            </button>
          </>
        ) : (
          <div className="flex w-[160px] h-[35px]">

            {/* Login */}
            <Link href="/login" className="w-1/2">
              <button
                className={`w-full h-full pr-2 text-xs font-semibold
                border-2 rounded-tl-3xl cursor-pointer transition-all duration-300
                hover:brightness-110 hover:scale-[1.05]
                [clip-path:polygon(0_0,100%_0,75%_100%,0_100%)]
                ${pathname === "/login"
                    ? "text-white border-none bg-gradient-to-l from-[#00184deb] to-[#0f172a]"
                    : "text-[#2563eb] border-[#2563eb] hover:text-white hover:border-none hover:bg-gradient-to-l from-[#00184deb] to-[#0f172a]"
                  }`}
              >
                Login
              </button>
            </Link>

            {/* Register */}
            <Link href="/register" className="w-1/2 -ml-[20px]">
              <button
                className={`w-full h-full pl-2 text-xs font-semibold
                border-2 rounded-br-3xl cursor-pointer transition-all duration-300
                hover:brightness-110 hover:scale-[1.05]
                [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]
                ${pathname === "/register"
                    ? "text-white border-none bg-gradient-to-r from-[#001136] to-[#2563eb]"
                    : "text-[#0f172a] border-[#0f172a] hover:text-white hover:border-none hover:bg-gradient-to-r from-[#001136] to-[#2563eb]"
                  }`}
              >
                Register
              </button>
            </Link>

          </div>
        )}
      </div>

    </div>
  );
};

export default Navbar;
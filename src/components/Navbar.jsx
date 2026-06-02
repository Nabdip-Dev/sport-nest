"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const pathname = usePathname();

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <li><NavLink href="/my-bookings">My Bookings</NavLink></li>
            <li><NavLink href="/add-facility">Add Facility</NavLink></li>
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
        </ul>
      </div>

      {/* Right - Auth */}
      <div className="navbar-end gap-2">

        {isPending ? (
          <span className="loading loading-bars loading-sm text-blue-500"></span>

        ) : user ? (
          <>
            <img
              src={user?.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt="user"
              className="z-10 w-6 h-6 rounded-full -mr-9 object-cover"
            />

            <div ref={dropdownRef} className="relative inline-block">

              {/* BUTTON (select look) */}
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center gap-2 font-normal relative pl-8 pr-3 py-1 text-[#000000fa]
    hover:text-white text-[15px] border border-[#0e0500]
    hover:bg-gradient-to-r from-[#4300fb] to-[#1a3cffe7]
    rounded-full cursor-pointer transition"
              >
                {user.name.length > 6 ? user.name.slice(0, 6) + "..." : user.name}
                <span className="text-[11px]">▼</span>
              </button>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute p-2 right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg z-50">

                  <Link
                    href="/my-profile"
                    className="w-full flex items-center gap-2 px-4 py-2 rounded-2xl font-semibold text-black hover:text-blue-500 hover:bg-blue-100"
                    onClick={() => setOpen(false)}
                  >
                    <CgProfile />
                    My Profile
                  </Link>

                  <button
                    className="w-full flex items-center gap-2 px-4 py-2 rounded-2xl hover:bg-red-100 text-red-600"
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                  >
                    <IoIosLogOut />
                    Logout
                  </button>

                </div>
              )}
            </div>

            {/* <button
              onClick={handleLogout}
              className="flex items-center gap-1 font-semibold relative pl-9 pr-4 py-1 text-[#000000fa]
        hover:text-white text-lg border border-[#0e0500]
        hover:bg-gradient-to-r from-[#4300fb] to-[#1a3cffe7]
        rounded-full cursor-pointer text-[16px]"
            >
              <IoIosLogOut />
              logout
            </button> */}

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
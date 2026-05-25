"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const topSports = [
  {
    name: "Football Ground Booking",
    desc: "Book premium football turf instantly with real-time availability.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Basketball Court Rent",
    desc: "Reserve indoor courts for matches and training easily.",
    image:
      "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Swimming Pool Slots",
    desc: "Premium pools with flexible hourly booking.",
    image:
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Tennis Court Booking",
    desc: "Professional courts for practice and competitive play.",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1400&auto=format&fit=crop",
  },
];

const bottomSports = [
  {
    name: "Cricket Ground Booking",
    desc: "Stadiums and turfs for teams and events.",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Badminton Court Rental",
    desc: "Indoor courts near you with hourly booking.",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Volleyball Ground",
    desc: "Beach and indoor volleyball courts.",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Rugby Field Access",
    desc: "Premium rugby fields for professional matches.",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1400&auto=format&fit=crop",
  },
];

function Card({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -8 }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
      className="relative min-w-[210px] h-[260px] rounded-2xl group"
    >
      {/* BORDER GLOW */}
      <div className="absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-br from-sky-300 via-indigo-300 to-pink-300 group-hover:from-sky-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">

        {/* GLASS CARD */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl">

          {/* IMAGE */}
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-center group-hover:scale-110 transition duration-700 ease-out"
          />

          {/* CLEAN OVERLAY (NO SHADOW ISSUE) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />

          {/* SHINE EFFECT */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
            <div className="absolute -top-10 left-[-70%] w-[60%] h-[200%] rotate-12 bg-white/30 blur-2xl group-hover:translate-x-[220%] transition-transform duration-1000" />
          </div>

          {/* TEXT (WHITE FIXED) */}
          <div className="absolute bottom-0 w-full p-3 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h3 className="text-sm font-semibold text-white drop-shadow-md">
              {item.name}
            </h3>
            <p className="text-[10px] text-white/80 mt-1 drop-shadow-md">
              {item.desc}
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default function SportsCategory() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xTop = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const xBottom = useTransform(scrollYProgress, [0, 1], ["-45%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden bg-white"
    >
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-180px] w-[520px] h-[520px] bg-sky-200/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-180px] w-[520px] h-[520px] bg-pink-200/40 blur-[120px] rounded-full" />
        <div className="absolute top-[30%] left-[45%] w-[320px] h-[320px] bg-indigo-200/30 blur-[120px] rounded-full" />
      </div>

      {/* TITLE */}
      <div className="text-center mb-16 px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
          Explore{" "}
          <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Sports Booking
          </span>
        </h2>

        <p className="mt-5 text-slate-500 max-w-xl mx-auto">
          Premium booking experience with instant availability and smooth UI.
        </p>
      </div>

      {/* TOP */}
      <div className="overflow-hidden mb-8 relative z-10">
        <motion.div style={{ x: xTop }} className="flex gap-5 w-max">
          {[...topSports, ...topSports].map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="overflow-hidden relative z-10">
        <motion.div style={{ x: xBottom }} className="flex gap-5 w-max">
          {[...bottomSports, ...bottomSports].map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
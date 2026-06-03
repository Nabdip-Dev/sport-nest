"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ArrowRight,
  Play,
  Trophy,
  Calendar,
  MapPin,
  Star,
} from "lucide-react";

import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const sportsData = [
  {
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2070&auto=format&fit=crop",
    title: "Football Turf",
    price: "₹499",
    emoji: "⚽",
  },

  {
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2070&auto=format&fit=crop",
    title: "Basketball Court",
    price: "₹699",
    emoji: "🏀",
  },

  {
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=2070&auto=format&fit=crop",
    title: "Swimming Arena",
    price: "₹899",
    emoji: "🏊",
  },

  {
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
    title: "Tennis Court",
    price: "₹599",
    emoji: "🎾",
  },

  {
    image:
      "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?q=80&w=2070&auto=format&fit=crop",
    title: "Cricket Ground",
    price: "₹999",
    emoji: "🏏",
  },

  {
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    title: "Gym Arena",
    price: "₹399",
    emoji: "🏋️",
  },

  {
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
    title: "Badminton Court",
    price: "₹549",
    emoji: "🏸",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === sportsData.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(slider);
  }, []);




  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle(prev => prev + 1);
    }, 18000); // full animation + pause

    return () => clearInterval(interval);
  }, []);

  const text = "Sports Facilities";

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.9, // smooth letter by letter
      },
    },
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };


  return (
    <section className="relative flex items-center overflow-hidden bg-white py-2 sm:py-4 lg:min-h-[78vh]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-[180px] w-[180px] rounded-full bg-blue-200/40 blur-3xl sm:h-[260px] sm:w-[260px]" />
      <div className="absolute bottom-0 right-0 h-[180px] w-[180px] rounded-full bg-cyan-200/40 blur-3xl sm:h-[260px] sm:w-[260px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-4 sm:px-5 sm:py-6 lg:grid-cols-2 lg:gap-10 lg:px-8">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col mx-auto text-center lg:text-left items-center lg:items-start justify-center lg:justify-start"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-flex items-center rounded-full border border-blue-100 bg-white pr-3 shadow-md"
          >
            <DotLottieReact
              src="https://lottie.host/b13d78cb-badc-412a-8996-c760981f6217/UnJn7rWygB.lottie"
              loop
              autoplay
              style={{ width: 60, height: 40, marginLeft: '-6px' }}
            />

            <span className="text-[16px] font-semibold text-slate-700 -ml-2">
              Sports Booking Platform
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Book Premium <br />
            <motion.div
              key={cycle}   // 🔥 important (full restart)
              className="inline-block"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {Array.from(text).map((char, i) => (
                <motion.span
                  key={i}
                  variants={child}
                  style={{ display: "inline-block" }}
                  className="bg-gradient-to-r from-blue-800 via-cyan-700 to-indigo-600 bg-clip-text text-transparent"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            <br />
            Anytime, Anywhere
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-sm lg:text-base">
            Discover premium football turfs, basketball courts,
            swimming arenas, badminton courts and more with
            seamless real-time booking.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/facilities"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore Facilities

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-md transition-all duration-300 hover:bg-slate-100 hover:scale-105">
              <Play className="h-4 w-4" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-3 ">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-white p-3 shadow-lg flex flex-col items-center justify-center text-center"
            >
              <Calendar className="mb-2 h-6 w-6 text-blue-600" />

              <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                <CountUp end={500} duration={4} enableScrollSpy />+
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Daily Bookings
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-white p-3 shadow-lg flex flex-col items-center justify-center text-center"
            >
              <Trophy className="mb-2 h-6 w-6 text-cyan-600" />

              <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                <CountUp end={130} duration={4} enableScrollSpy />+
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Sports Facilities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-white p-3 shadow-lg text-center item-center justify-center"
            >
              <div className="mb-2 flex justify-center">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>

              <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
                <CountUp end={24} duration={4} enableScrollSpy />/7
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Instant Booking
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mt-4 lg:mt-0"
        >

          {/* Main Slider */}
          <div className="relative h-[260px] overflow-hidden rounded-[24px] bg-white p-2 shadow-2xl sm:h-[380px] lg:h-[480px]">

            {sportsData.map((sport, index) => (
              <motion.img
                key={index}
                src={sport.image}
                alt={sport.title}
                initial={false}
                animate={{
                  opacity: current === index ? 1 : 0,
                  scale: current === index ? 1 : 1.05,
                }}
                transition={{
                  opacity: {
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 5,
                    ease: "linear",
                  },
                }}
                className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
              />
            ))}
          </div>

          {/* Sport Card */}
          <div className="absolute left-2 top-3 rounded-xl bg-white p-2.5 shadow-xl">

            <div className="flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-lg sm:h-10 sm:w-10 sm:text-xl">
                {sportsData[current].emoji}
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                  {sportsData[current].title}
                </h3>

                <p className="text-[10px] text-slate-500 sm:text-xs">
                  Available Today
                </p>
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="absolute bottom-3 right-2 rounded-xl bg-white p-3 shadow-xl">

            <p className="text-[10px] text-slate-500 sm:text-xs">
              Starting From
            </p>

            <h2 className="mt-1 text-xl font-black text-blue-600 sm:text-2xl">
              {sportsData[current].price}
            </h2>

            <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
              Per Hour Booking
            </p>
          </div>

          {/* Rating Card */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute bottom-20 left-2 rounded-xl bg-white p-2.5 shadow-xl"
          >
            <div className="flex items-center gap-2">

              <div className="flex text-yellow-400">
                <Star className="h-3.5 w-3.5 fill-yellow-400" />
                <Star className="h-3.5 w-3.5 fill-yellow-400" />
                <Star className="h-3.5 w-3.5 fill-yellow-400" />
                <Star className="h-3.5 w-3.5 fill-yellow-400" />
                <Star className="h-3.5 w-3.5 fill-yellow-400" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                  4.9 Rating
                </h3>

                <p className="text-[10px] text-slate-500 sm:text-xs">
                  Trusted by Athletes
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
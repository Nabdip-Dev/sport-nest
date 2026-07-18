"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FacilitiesCard from "@/components/FacilitiesCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FeaturedFacilities = ({ facilities = [] }) => {
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const displayedFacilities = showAll
    ? facilities
    : facilities.slice(0, 8);

  return (
    <section className="relative overflow-hidden py-20 bg-[#eaf8ff]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/90 blur-[140px]" />

        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-sky-300/50 blur-[120px]" />

        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-cyan-300/40 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-200/40 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/50 blur-[140px]" />
      </div>

      <div className="relative w-11/12 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 font-semibold text-sm shadow-sm border border-blue-200 ">
            Premium Sports Experience
          </span>

          <h2 className="mt-2 text-2xl md:text-5xl font-black leading-tight text-slate-900">

            Featured
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
              {" "}Facilities
            </span>

          </h2>


          <p className="max-w-3xl mx-auto mt-2 text-lg leading-8 text-slate-600">
            Discover beautifully maintained sports venues with world-class
            amenities, flexible booking, professional environments, and premium
            experiences designed for every athlete.
          </p>

        </motion.div>

        {/* Loading */}

        {loading ? (

          <div className="">
            <div className="w-full h-[500px] flex items-center justify-center">
              <span className="loading loading-ring w-28 h-28 text-blue-600"></span>
            </div>
          </div>

        ) : (

          <>
            {/* Cards */}

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 md:px-0"
            >

              <AnimatePresence>

                {displayedFacilities.map((facility, index) => (

                  <motion.div
                    key={facility._id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 50,
                      scale: .95
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1
                    }}
                    exit={{
                      opacity: 0,
                      scale: .9
                    }}
                    transition={{
                      duration: .45,
                      delay: index * .08
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10
                    }}
                    className="group"
                  >

                    <div className="relative rounded-3xl">

                      {/* Glow */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-300/20 via-cyan-300/20 to-sky-300/20 blur-xl opacity-0 group-hover:opacity-100 duration-500"></div>

                      {/* Card */}
                      <div className="relative rounded-[28px]  border border-blue-300 border-t-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">

                        <FacilitiesCard facility={facility} />

                      </div>

                    </div>

                  </motion.div>

                ))}

              </AnimatePresence>

            </motion.div>

            {/* Show More */}

            {facilities.length > 8 && (

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex justify-center mt-20"
              >
                <Link href="/facilities" className="group relative">

                  {/* Premium Background Glow */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-60 group-hover:blur-3xl"></div>

                  {/* Gradient Border */}
                  <div className="relative rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 p-[1.5px] transition-all duration-500 group-hover:scale-105">

                    {/* Button */}
                    <div className="relative flex items-center gap-3 overflow-hidden rounded-full bg-white/90 px-3 py-2 backdrop-blur-2xl">

                      {/* Shine */}
                      <span className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-1000 group-hover:translate-x-[150%]" />

                      {/* Small Floating Light */}
                      <div className="absolute left-4 top-2 h-2 w-2 rounded-full bg-cyan-300 blur-sm animate-pulse"></div>

                      {/* Text */}
                      <span className="relative text-[13px] font-semibold tracking-[0.15em] uppercase text-slate-700 transition-all duration-300 group-hover:text-blue-700">
                        Show More
                      </span>

                      {/* Icon */}
                      <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                        }}
                        className="relative flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white shadow-[0_10px_35px_rgba(37,99,235,0.45)] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                      >
                        <ArrowRight
                          size={18}
                          strokeWidth={2.6}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </motion.div>

                    </div>
                  </div>

                </Link>
              </motion.div>
            )}

          </>

        )}

      </div>

    </section>
  );
};

export default FeaturedFacilities;
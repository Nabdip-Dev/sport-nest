"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden flex items-center justify-center px-6 lg:px-20">

            {/* Decorative SVGs */}
            <motion.svg
                className="absolute top-0 left-0 w-80 h-80 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
            >
                <circle cx="100" cy="100" r="80" fill="url(#grad1)" />
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6b21a8" />
                        <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                </defs>
            </motion.svg>

            <motion.svg
                className="absolute bottom-0 right-0 w-96 h-96 opacity-30"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
            >
                <circle cx="150" cy="150" r="120" fill="url(#grad2)" />
                <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#facc15" />
                    </linearGradient>
                </defs>
            </motion.svg>

            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">

                {/* LEFT SIDE TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: -150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="flex-1"
                >
                    <span className="inline-block mb-4 text-sm font-semibold tracking-wider px-4 py-1 rounded-full bg-purple-100 text-purple-600">
                        Next-Gen Sports Booking
                    </span>

                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500">
                        Book Your <br className="hidden md:block" /> Arena in 3D
                    </h1>

                    <p className="text-gray-700 mb-8 text-lg max-w-lg">
                        Football, basketball, tennis courts, swimming pools — all available with instant online reservations. Experience premium interactive booking with 3D effects and live icons.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.07 }}
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-full shadow-xl transition-transform duration-300"
                        >
                            Explore Arenas
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.07, backgroundColor: "#f0f9ff" }}
                            className="px-6 py-3 border border-purple-600 text-purple-600 font-semibold rounded-full transition-colors duration-300"
                        >
                            How It Works
                        </motion.button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-12 mt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500">
                                35K+
                            </h2>
                            <p className="text-gray-500 text-sm mt-1">Bookings Completed</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                                250+
                            </h2>
                            <p className="text-gray-500 text-sm mt-1">Arenas Listed</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
                                99%
                            </h2>
                            <p className="text-gray-500 text-sm mt-1">Happy Customers</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="flex-1 relative flex justify-center items-center"
                >
                    <motion.div
                        whileHover={{ y: -15, scale: 1.03, rotate: 2 }}
                        className="relative z-10"
                    >
                       <Image
  src="https://images.unsplash.com/photo-1599058917213-9f7c1f48f6bb?auto=format&fit=crop&w=500&q=80"
  alt="Sports arena"
  width={500}
  height={500}
  className="drop-shadow-2xl"
/>
                    </motion.div>

                    {/* Floating 3D Booking Card with Icons */}
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        whileHover={{ scale: 1.07, rotate: -1 }}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-3xl p-6 shadow-2xl w-64 border border-gray-200 flex flex-col items-center gap-3"
                    >
                        {/* SVG Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <h3 className="text-lg font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500">
                            Premium Arena
                        </h3>
                        <p className="text-gray-500 text-sm">Starting from ৳850/hour</p>
                        <motion.button
                            whileHover={{ scale: 1.07 }}
                            className="mt-2 w-full py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold rounded-xl shadow-lg transition-transform duration-300"
                        >
                            Reserve Now
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
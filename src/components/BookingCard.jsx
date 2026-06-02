"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";

const BookingCard = ({ facility }) => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    
    const [bookingDate, setBookinDate] = useState("")
   

    return (
        <div className="flex flex-col gap-4 bg-gradient-to-br from-emerald-400/20 via-green-300/20 to-lime-500/20 border border-slate-200 rounded-xl p-4">
            <div className="grid grid-cols-6 gap-4 justify-between items-center">

                <motion.div
                    whileHover={{ y: -3 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                    className="flex col-span-3 items-center justify-between border border-blue-300 rounded-xl p-4"
                >
                    <div>
                        <p className="text-[11px] text-gray-500">Price per session</p>
                        <p className="text-xl font-bold text-gray-900">
                            <span className="text-blue-600">${facility?.price}</span>
                        </p>
                    </div>

                    <FaMoneyBillWave className="text-3xl text-blue-500" />
                </motion.div>

                <motion.div
                    whileHover={{ y: -3 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                    className="col-span-3 border border-blue-300 rounded-xl p-2"
                >
                    <p className="text-[11px] text-gray-500 mb-1">
                        Booking Date :
                    </p>

                    <input
                        onChange={(e) => setBookinDate(e.target.value)}
                        type="date"
                        className="input bg-gradient-to-l from-[#03f7ff63] to-blue-100 border border-blue-100 w-full"
                    />
                </motion.div>
            </div>

            <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold relative overflow-hidden group"
            >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />

                <span className="relative">Book Now</span>
            </motion.button>
        </div>
    );
};

export default BookingCard;
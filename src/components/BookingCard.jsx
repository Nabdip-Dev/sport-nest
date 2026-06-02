"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaMoneyBillWave } from "react-icons/fa";

const BookingCard = ({ facility }) => {
    const [loading, setLoading] = useState(false);
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [bookingDate, setBookinDate] = useState("")
    // const [price, _id,] = facility

    const handelBooking = async () => {
        if (!session?.user) {
            toast.error("Please login first");
            return;
        }

        if (!bookingDate) {
            toast.error("Please select a booking date");
            return;
        }

        if (!facility?._id) {
            toast.error("Facility not found");
            return;
        }

        setLoading(true);

        const user = session.user;

        const dataBooking = {
            userId: user?.id || user?._id,
            userName: user?.name || user?.email,
            userEmail: user?.email,
            userImage: user?.image || "",

            facilityId: facility?._id,
            facilityName: facility?.name,
            facilitySport: facility?.sport,
            facilityLocation: facility?.location,
            facilityImage: facility?.image,

            price: Number(facility?.price),
            bookingDate,
        };

        try {
            const res = await fetch("http://localhost:5000/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataBooking),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result?.message || "Booking failed");
            }

            toast.success("Booking successful!");
            console.log(result);

        } catch (error) {
            console.error(error);
            toast.error(error.message || "Something went wrong");

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-4 bg-gradient-to-br from-emerald-400/20 via-green-300/20 to-lime-500/20 border border-slate-200 rounded-xl p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between items-center">

                <motion.div
                    whileHover={{ y: -3 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                    className="flex col-span-1 items-center justify-between border border-blue-300 rounded-xl p-4"
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
                    className="col-span-1 border border-blue-300 rounded-xl p-2"
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
                onClick={handelBooking}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                }}
                className="w-full py-3 cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold relative overflow-hidden group"
            >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />

                <span className="relative">Book Now</span>
            </motion.button>
        </div>
    );
};

export default BookingCard;
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { authClient } from "@/lib/auth-client";

import {
    FaMapMarkerAlt,
    FaFootballBall,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaMoneyBillWave,
    FaEdit,
    FaTrash,
} from "react-icons/fa";
import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";
import { BsDatabaseAdd } from "react-icons/bs";
import { MdOutlineNoteAdd } from "react-icons/md";
import Link from "next/link";


export default function ManageFacilitiesPage() {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        loadFacilities();
    }, []);

    const loadFacilities = async () => {
        try {
            const { data } = await authClient.token();
            const res = await fetch("http://localhost:5000/my-facilities", {
                headers: { Authorization: `Bearer ${data.token}` },
            });
            const result = await res.json();
            setFacilities(result);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


    // Smooth card animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
        exit: {
            opacity: 0,
            x: -30,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    };

    // Skeleton loading for cards only
    const SkeletonCard = () => (
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col lg:flex-row gap-5">
            <div className="lg:w-[300px] h-[220px] bg-slate-100 rounded-xl animate-pulse" />
            <div className="flex-1 space-y-3">
                <div className="h-7 w-48 bg-slate-100 rounded-lg animate-pulse" />
                <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
                <div className="h-4 w-4/5 bg-slate-100 rounded animate-pulse" />
                <div className="grid grid-cols-2 gap-3 pt-2">
                    {[...Array(4)].map((_, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="h-3 w-16 bg-slate-100 rounded animate-pulse" />
                            <div className="h-5 w-24 bg-slate-100 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[radial-gradient(circle,_#ffffff_0%,_#dbeeff_70%,_#f0f9ff_100%)] py-10 px-4">

            {/* Header - Always visible */}
            <div className="max-w-6xl mx-auto text-center mb-10  rounded-4xl">
                <h1
                    className="
      text-xl md:text-5xl font-bold py-4
      bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500
      bg-clip-text text-transparent
      transition-all duration-500 ease-out
      hover:tracking-wider hover:scale-105
      hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]
    "
                >
                    My Facilities
                </h1>

                <p
                    className="
      mt-3 text-slate-500
      transition-all duration-500
      hover:text-slate-700
      hover:tracking-wide
    "
                >
                    Manage your sports facilities
                </p>
            </div>

            {/* Loading State - Only Cards Area */}
            {loading ? (
                <div className="max-w-6xl mx-auto space-y-5">
                    {[...Array(3)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            ) : facilities.length === 0 ? (
                // Empty State
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col mx-auto justify-center items-center
                p-10 rounded-3xl
                bg-gradient-to-t from-[#8ffc8f66] via-[#8ffc8f66] to-[#f2f2f2]
                backdrop-blur-xl border border-t-transparent hover:border-t-transparent border-white
                shadow-2xl text-center max-w-sm transition-all duration-300
                hover:scale-[1.02] hover:border-purple-400/30">

                        <div className="p-5 rounded-full 
                    bg-gradient-to-tr from-[#938ef5] via-[#6485fc] to-[#5555ff] 
                    shadow-lg mb-5 animate-pulse">
                            <MdOutlineNoteAdd className="text-5xl text-white" />
                        </div>

                        <h2 className="text-2xl font-semibold text-black mb-2 tracking-wide">
                            No Facilities Found
                        </h2>

                        <p className="text-black/60 text-sm leading-relaxed">
                            Add your first facility to get started and manage everything smoothly
                        </p>

                        <Link href="/add-facility" className="mt-5 px-5 py-2 rounded-xl
                       bg-transparent hover:bg-blue-500
                       border border-blue-500 hover:border-purple-400/40
                       text-blue-500 hover:text-white text-sm transition-all">
                            + Add Facility
                        </Link>
                    </div>
                </div>
            ) : (
                // Cards Grid with Smooth Animations
                <div className="max-w-6xl mx-auto space-y-5">
                    <AnimatePresence mode="popLayout">
                        {facilities.map((f, index) => (
                            <motion.div
                                key={f._id}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                                whileHover={{
                                    y: -4,
                                    transition: { duration: 0.2 }
                                }}
                                className="
                                    group
                                    bg-[#c8faf041]
                                    rounded-2xl
                                    overflow-hidden
                                    border
                                    border-white
                                    shadow-sm
                                    hover:shadow-md
                                    transition-shadow
                                    duration-300
                                    flex
                                    flex-col
                                    lg:flex-row
                                "
                            >
                                {/* Image Section */}
                                <div className="lg:w-[490px] h-[360px] overflow-hidden bg-slate-100">
                                    <img
                                        src={f.image}
                                        alt={f.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs font-medium">
                                            {f.sport}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-5">
                                    <h2 className="text-xl font-bold text-slate-800 mb-2">
                                        {f.name}
                                    </h2>

                                    <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                                        {f.description}
                                    </p>

                                    {/* Info Grid */}
                                    <div className="grid md:grid-cols-2 gap-3 mb-5">
                                        <InfoItem
                                            icon={<FaMapMarkerAlt />}
                                            label="Location"
                                            value={f.location}
                                        />
                                        <InfoItem
                                            icon={<FaFootballBall />}
                                            label="Sport"
                                            value={f.sport}
                                        />
                                        <InfoItem
                                            icon={<FaMoneyBillWave />}
                                            label="Price"
                                            value={f.price}
                                        />
                                        <InfoItem
                                            icon={<FaClock />}
                                            label="Hours"
                                            value={`${f.open} - ${f.close}`}
                                        />
                                        <InfoItem
                                            icon={<FaPhone />}
                                            label="Phone"
                                            value={`${f.phoneCode} ${f.phone}`}
                                        />
                                        <InfoItem
                                            icon={<FaEnvelope />}
                                            label="Email"
                                            value={f.email}
                                        />
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <EditModal facility={f} />
                                        <DeleteModal facility={f} id={`delete_modal_${f._id}`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}

function InfoItem({ icon, label, value }) {
    return (
        <div className="flex items-center gap-4 p-1 rounded-2xl bg-[#ffffff59] border 
        border-white/40  hover:shadow-lg transition-all duration-300">

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-xl">
                {icon}
            </div>

            <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase text-slate-400 tracking-wide">
                    {label}
                </span>
                <span className="text-sm font-medium text-slate-700 break-words">
                    {value}
                </span>
            </div>

        </div>
    );
}
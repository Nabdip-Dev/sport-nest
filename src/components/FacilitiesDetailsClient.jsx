"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFutbol,
  FaStar,
} from "react-icons/fa";
import BookingCard from "./BookingCard";

export default function FacilitiesDetailsClient({ facility }) {
  const {
    name,
    sport,
    open,
    close,
    description,
    image,
    location,
    email,
    phone,
    phoneCode,
  } = facility;

  return (
    <div className="flex justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row border border-gray-200"
      >

        {/* IMAGE */}
        <div className="md:w-2/5 relative overflow-hidden bg-black">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover min-h-[260px] md:min-h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />

          {/* SPORT badge */}
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-lg flex items-center gap-2 shadow-sm border border-gray-200">
            <FaFutbol className="text-blue-600 text-xs" />
            <span className="text-[11px] font-semibold">{sport}</span>
          </div>

          {/* RATING */}
          <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm border border-gray-200">
            <FaStar className="text-blue-500 text-xs" />
            <span className="text-[11px] font-semibold">4.8</span>
          </div>
        </div>

        {/* DETAILS */}
        <div className="md:w-3/5 p-4 md:p-6 space-y-4 bg-white">
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          <p className="text-gray-600 text-sm">{description}</p>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Info icon={<FaMapMarkerAlt />} label="Location" value={location} />
            <Info icon={<FaPhone />} label="Phone" value={`${phoneCode} ${phone}`} />
            <Info icon={<FaEnvelope />} label="Email" value={email} />
            <Info icon={<FaClock />} label="Open Hours" value={`${open} - ${close}`} />
          </div>

          <BookingCard facility={facility} />
        </div>
      </motion.div>
    </div>
  );
}

/* INFO CARD */
function Info({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex gap-2.5 p-3 rounded-lg border border-gray-200 bg-white"
    >
      <div className="text-blue-600 text-sm mt-1">{icon}</div>
      <div className="min-w-0">
        <p className="text-[10px] text-gray-700 uppercase">{label}</p>
        <p className="text-xs text-gray-800 font-medium mt-1 break-words">{value}</p>
      </div>
    </motion.div>
  );
}
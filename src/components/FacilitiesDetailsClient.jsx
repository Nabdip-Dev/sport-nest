"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFutbol,
  FaStar,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function FacilitiesDetailsClient({ facility }) {
  const {
    name,
    sport,
    price,
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
    <div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ boxShadow: "0 18px 50px rgba(0,0,0,0.10)" }}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-200 relative group"
      >

        {/* glowing border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none border border-blue-400/20" />

        {/* IMAGE */}
        <div className="md:w-2/5 relative overflow-hidden bg-black">

          <motion.div
            className="relative w-full h-full overflow-hidden"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.img
              src={image}
              alt={name}
              className="w-full h-full object-cover min-h-[260px] md:min-h-full"
              variants={{
                rest: {
                  scale: 1,
                  filter: "brightness(0.9)",
                },
                hover: {
                  scale: 1.08,
                  filter: "brightness(1)",
                },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              variants={{
                rest: { opacity: 1 },
                hover: { opacity: 0.85 },
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* SPORT badge */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1.5 rounded-lg flex items-center gap-2 shadow-md border border-white/40"
          >
            <FaFutbol className="text-blue-600 text-xs" />
            <span className="text-[11px] font-semibold">{sport}</span>
          </motion.div>

          {/* RATING */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1.5 rounded-lg flex items-center gap-1 shadow-md border border-white/40"
          >
            <FaStar className="text-blue-500 text-xs" />
            <span className="text-[11px] font-semibold">4.8</span>
          </motion.div>

        </div>

        {/* DETAILS */}
        <div className="md:w-3/5 p-4 md:p-6 space-y-4 bg-white">

          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
            {name}
          </h1>

          <p className="text-gray-600 text-xs leading-relaxed">
            {description}
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            <Info icon={<FaMapMarkerAlt />} label="Location" value={location} />
            <Info icon={<FaPhone />} label="Phone" value={`${phoneCode} ${phone}`} />
            <Info icon={<FaEnvelope />} label="Email" value={email} />
            <Info icon={<FaClock />} label="Open Hours" value={`${open} - ${close}`} />

          </div>

          {/* PRICE */}
          <motion.div
            whileHover={{
              scale: 1.01,
              boxShadow: "0 8px 20px rgba(59,130,246,0.15)",
            }}
            className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-4"
          >
            <div>
              <p className="text-[11px] text-gray-500">Price per session</p>
              <p className="text-xl font-bold text-gray-900">
                <span className="text-blue-600">${price}</span>
              </p>
            </div>

            <FaMoneyBillWave className="text-3xl text-blue-500" />
          </motion.div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 20px rgba(37,99,235,0.3)",
            }}
            whileTap={{ scale: 0.96 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition duration-700" />
            <span className="relative">Book Now</span>
          </motion.button>

        </div>
      </motion.div>
    </div>
  );
}

/* INFO CARD */
function Info({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex gap-2.5 p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur hover:border-blue-200 transition relative overflow-hidden"
    >
      <div className="text-blue-600 text-sm mt-1">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] text-gray-400 uppercase">{label}</p>
        <p className="text-xs text-gray-800 font-medium mt-1 break-words">
          {value}
        </p>
      </div>
    </motion.div>
  );
}
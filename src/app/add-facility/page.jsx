"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AddFacility() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    email: "",
    phone: "",
    image: "",
    description: "",
    sport: "",
    open: "",
    close: "",
    phoneCode: "+91",
  });

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-16 px-4">
      
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <motion.h1
          whileHover={{
            scale: 1.03,
            letterSpacing: "1px",
          }}
          className="text-4xl font-bold text-slate-900 transition-all duration-300 cursor-default"
        >
          Add Sports Facility
        </motion.h1>

        <motion.p
          whileHover={{
            color: "#06b6d4",
            y: -2,
          }}
          className="text-slate-600 mt-2 transition-all duration-300 cursor-default"
        >
          Premium Booking Form
        </motion.p>
      </motion.div>

      {/* FORM CARD */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-2xl space-y-6"
      >

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          <Input
            label="Facility Name"
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Enter facility name"
          />

          {/* SPORTS */}
          <div>
            <label className="font-semibold text-slate-800">
              Sports Type
            </label>

            <select
              name="sport"
              value={form.sport}
              onChange={handle}
              className="w-full mt-2 bg-white border border-slate-200 rounded-2xl p-3 text-slate-900 focus:border-cyan-500 outline-none hover:border-cyan-400 transition"
            >
              <option value="">Select Sport</option>
              <option>⚽ Football</option>
              <option>🏏 Cricket</option>
              <option>🏸 Badminton</option>
              <option>🏀 Basketball</option>
              <option>🎾 Tennis</option>
            </select>
          </div>

          <Input
            label="Location"
            name="location"
            value={form.location}
            onChange={handle}
            placeholder="Enter facility location"
          />

          <Input
            label="Price Per Hour"
            name="price"
            value={form.price}
            onChange={handle}
            placeholder="e.g. 1500"
          />

          <Input
            label="Opening Time"
            type="time"
            name="open"
            value={form.open}
            onChange={handle}
          />

          <Input
            label="Closing Time"
            type="time"
            name="close"
            value={form.close}
            onChange={handle}
          />

          {/* IMAGE URL */}
          <Input
            label="Image URL"
            name="image"
            value={form.image}
            onChange={handle}
            placeholder="Paste image URL"
          />

          {/* EMAIL */}
          <Input
            label="Owner Email"
            name="email"
            value={form.email}
            onChange={handle}
            placeholder="Enter owner email"
          />

          {/* PHONE */}
          <div>
            <label className="font-semibold text-slate-800">
              Phone
            </label>

            <div className="flex mt-2 border border-slate-200 rounded-2xl overflow-hidden bg-white focus-within:border-cyan-500 hover:border-cyan-400 transition">

              <select
                value={form.phoneCode}
                onChange={(e) =>
                  setForm({ ...form, phoneCode: e.target.value })
                }
                className="bg-slate-100 px-4 text-slate-800 outline-none"
              >
                <option>+91</option>
                <option>+880</option>
                <option>+1</option>
                <option>+44</option>
              </select>

              <input
                name="phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value.replace(/[^0-9]/g, ""),
                  })
                }
                placeholder="Enter phone number"
                className="w-full p-3 text-slate-900 outline-none bg-white"
              />
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="font-semibold text-slate-800">
            Description
          </label>

          <textarea
            name="description"
            value={form.description}
            onChange={handle}
            rows={5}
            className="w-full mt-2 border border-slate-200 rounded-2xl p-3 text-slate-900 bg-white outline-none focus:border-cyan-500 hover:border-cyan-400 transition"
            placeholder="Write facility details..."
          />
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 0px 20px rgba(6,182,212,0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg transition-all duration-300"
        >
          Submit Facility
        </motion.button>

      </motion.form>
    </section>
  );
}

/* INPUT COMPONENT */
const Input = ({ label, ...props }) => (
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2 }}
  >
    <label className="font-semibold text-slate-800">
      {label}
    </label>

    <input
      {...props}
      className="w-full mt-2 bg-white border border-slate-200 rounded-2xl p-3 text-slate-900 outline-none focus:border-cyan-500 hover:border-cyan-400 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-100"
    />
  </motion.div>
);
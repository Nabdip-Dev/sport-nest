"use client";

import { motion } from "framer-motion";

export default function AddFacility() {

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const destination = Object.fromEntries(formData.entries());

    console.log(destination);

    const res = await fetch('http://localhost:5000/destination', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(destination)
    })

    const data = await res.json()
    console.log(data)

  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-16 px-4">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >

        <motion.h1
          whileHover={{
            scale: 1.03,
            letterSpacing: "1px",
          }}
          className="cursor-default text-4xl font-bold text-slate-900 transition-all duration-300"
        >
          Add Sports Facility
        </motion.h1>

        <motion.p
          whileHover={{
            color: "#06b6d4",
            y: -2,
          }}
          className="mt-2 cursor-default text-slate-600 transition-all duration-300"
        >
          Premium Booking Form
        </motion.p>

      </motion.div>

      {/* FORM CARD */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl space-y-6 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
      >

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2">

          <Input
            label="Facility Name"
            name="name"
            placeholder="Enter facility name"
          />

          {/* SPORTS */}
          <div>

            <label className="font-semibold text-slate-800">
              Sports Type
            </label>

            <select
              name="sport"
              defaultValue=""
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 outline-none transition hover:border-cyan-400 focus:border-cyan-500"
            >
              <option value="">
                Select Sport
              </option>

              <option>
                ⚽ Football
              </option>

              <option>
                🏏 Cricket
              </option>

              <option>
                🏸 Badminton
              </option>

              <option>
                🏀 Basketball
              </option>

              <option>
                🎾 Tennis
              </option>

            </select>

          </div>

          <Input
            label="Location"
            name="location"
            placeholder="Enter facility location"
          />

          <Input
            label="Price Per Hour"
            name="price"
            placeholder="e.g. 1500"
          />

          <Input
            label="Opening Time"
            type="time"
            name="open"
          />

          <Input
            label="Closing Time"
            type="time"
            name="close"
          />

          {/* IMAGE URL */}
          <Input
            label="Image URL"
            name="image"
            placeholder="Paste image URL"
          />

          {/* EMAIL */}
          <Input
            label="Owner Email"
            type="email"
            name="email"
            placeholder="Enter owner email"
          />

          {/* PHONE */}
          <div>

            <label className="font-semibold text-slate-800">
              Phone
            </label>

            <div className="mt-2 flex overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-cyan-400 focus-within:border-cyan-500">

              <select
                name="phoneCode"
                defaultValue="+91"
                className="bg-slate-100 px-4 text-slate-800 outline-none"
              >
                <option value="+91">
                  🇮🇳 +91
                </option>

                <option value="+880">
                  🇧🇩 +880
                </option>

                <option value="+1">
                  🇺🇸 +1
                </option>

                <option value="+44">
                  🇬🇧 +44
                </option>

              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                className="w-full bg-white p-3 text-slate-900 outline-none"
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
            rows={5}
            placeholder="Write facility details..."
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 outline-none transition hover:border-cyan-400 focus:border-cyan-500"
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
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white shadow-lg transition-all duration-300"
        >
          Submit Facility
        </motion.button>

      </motion.form>
    </section>
  );
}

/* INPUT COMPONENT */

const Input = ({ label, type = "text", ...props }) => (
  <motion.div
    whileHover={{
      y: -2,
    }}
    transition={{
      duration: 0.2,
    }}
  >

    <label className="font-semibold text-slate-800">
      {label}
    </label>

    <input
      type={type}
      {...props}
      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 outline-none transition-all duration-300 hover:border-cyan-400 focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-100"
    />

  </motion.div>
);
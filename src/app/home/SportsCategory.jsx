"use client";

import { motion } from "framer-motion";

const sports = [
  { name: "Football", color: "from-green-400 to-emerald-600" },
  { name: "Cricket", color: "from-yellow-400 to-orange-500" },
  { name: "Basketball", color: "from-red-400 to-pink-500" },
  { name: "Tennis", color: "from-blue-400 to-indigo-500" },
  { name: "Swimming", color: "from-cyan-400 to-blue-500" },
  { name: "Badminton", color: "from-purple-400 to-fuchsia-500" },
];

export default function SportsCategory() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#050816] via-[#0a0f1f] to-[#050816] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-12">
          Explore <span className="text-pink-400">Sports</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sports.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className={`p-10 rounded-3xl bg-gradient-to-r ${s.color} shadow-2xl cursor-pointer`}
            >
              <h3 className="text-xl font-bold">{s.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
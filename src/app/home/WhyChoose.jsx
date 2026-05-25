"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Lock,
  Rocket,
  Headphones,
  Medal,
} from "lucide-react";

const FEATURES = [
  {
    icon: Lock,
    title: "Secure Booking",
    desc: "End-to-end encrypted system with verified high-trust transactions.",
    color: "from-sky-400 via-cyan-300 to-blue-500",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    icon: Rocket,
    title: "Instant Booking",
    desc: "Ultra-low latency booking engine with real-time confirmation.",
    color: "from-pink-400 via-rose-300 to-red-500",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
  },
  {
    icon: Headphones,
    title: "24/7 Access",
    desc: "Global uptime infrastructure running 24/7 without interruption.",
    color: "from-violet-400 via-purple-300 to-indigo-500",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
  },
  {
    icon: Medal,
    title: "Premium Grounds",
    desc: "Elite stadium-grade professional sports environments worldwide.",
    color: "from-emerald-400 via-green-300 to-lime-500",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
];

export default function WhyChoose() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bg1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bg2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={ref}
      className="relative py-48 overflow-hidden bg-white"
    >

      {/* FLOATING BACKGROUND LAYERS */}
      <motion.div style={{ y: bg1 }} className="absolute inset-0">
        <div className="absolute top-[-350px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-sky-200 blur-[240px] opacity-40 rounded-full" />
      </motion.div>

      <motion.div style={{ y: bg2 }} className="absolute inset-0">
        <div className="absolute bottom-[-350px] right-[-200px] w-[900px] h-[900px] bg-purple-200 blur-[240px] opacity-30 rounded-full" />
      </motion.div>

      {/* PARTICLE DOT GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:22px_22px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl font-semibold tracking-tight text-slate-900">
            Why{" "}
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Choose
            </span>{" "}
            SportNest
          </h2>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            A next-generation cinematic booking experience with immersive interaction design.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {FEATURES.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative transition-all duration-300"
              >

                {/* OUTER GLOW */}
                <div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 blur-3xl transition duration-500 bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300" />

                {/* CARD */}
                <div className="relative p-9 rounded-3xl bg-white border border-slate-100 shadow-2xl overflow-hidden text-center">

                  {/* gradient base */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`}
                  />

                  {/* light orb */}
                  <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-white/40 blur-3xl rounded-full" />

                  {/* ICON */}
                  <div
                    className={`relative z-10 w-20 h-20 mx-auto flex items-center justify-center rounded-2xl ${item.iconBg} shadow-lg border border-white/60 mb-7 transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`w-10 h-10 ${item.iconColor}`}
                      strokeWidth={2.4}
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="relative z-10 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="relative z-10 mt-4 text-sm text-slate-500 leading-7">
                    {item.desc}
                  </p>

                  {/* underline */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="relative z-10 mt-8 h-[2px] bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400"
                  />

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
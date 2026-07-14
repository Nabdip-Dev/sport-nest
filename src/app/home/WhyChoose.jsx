"use client";

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
  return (
    <section className="relative py-48 overflow-hidden bg-white">
      {/* FLOATING BACKGROUND LAYERS */}
      <div className="absolute inset-0">
        <div className="absolute top-[-350px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-sky-200 blur-[240px] opacity-40 rounded-full" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute bottom-[-350px] right-[-200px] w-[900px] h-[900px] bg-purple-200 blur-[240px] opacity-30 rounded-full" />
      </div>

      {/* PARTICLE DOT GRID */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:22px_22px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-semibold tracking-tight text-slate-900">
            Why{" "}
            <span className="bg-gradient-to-r from-sky-400 via-[#2b84ff] to-[rgb(0,17,95)] bg-clip-text text-transparent">
              Choose
            </span>{" "}
            SportNest
          </h2>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            A next-generation cinematic booking experience with immersive
            interaction design.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {FEATURES.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative transform transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3 hover:scale-[1.03]"
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
                  <div className="relative z-10 mt-8 h-[2px] w-full bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
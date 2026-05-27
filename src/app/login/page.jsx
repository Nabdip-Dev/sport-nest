"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {

  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6 py-10">

      <div className="w-full max-w-md rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 p-[1px] shadow-2xl">

        <div className="rounded-3xl bg-white/90 p-8 backdrop-blur-2xl">

          {/* TOP */}
          <div className="text-center">

            <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Welcome Back
            </div>

            <h2 className="mt-5 text-4xl font-black text-slate-900">
              Login Account
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              Login to continue your sports journey
            </p>

          </div>

          {/* FORM */}
          <form className="mt-8 space-y-5">

            {/* EMAIL */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="h-[55px] w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-[55px] w-full rounded-2xl border border-slate-200 bg-white px-4 pr-12 text-sm text-slate-800 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-lg"
                >
                  {show ? "👁️" : "🙈"}
                </button>

              </div>

            </div>

            {/* FORGOT */}
            <div className="flex justify-end">

              <button
                type="button"
                className="text-sm font-semibold text-cyan-600 hover:text-cyan-700"
              >
                Forgot Password?
              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 py-4 text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Login Account
            </button>

          </form>

          {/* DIVIDER */}
          <div className="relative my-7">

            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>

            <div className="relative flex justify-center">

              <span className="bg-white px-4 text-sm text-slate-400">
                OR
              </span>

            </div>

          </div>

          {/* GOOGLE */}
          <button
            className="flex h-[55px] w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50"
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="google"
              className="h-5 w-5"
            />

            Continue with Google

          </button>

          {/* REGISTER */}
          <p className="mt-7 text-center text-sm text-slate-500">

            Don&apos;t have an account?{" "}

            <Link
              href="/register"
              className="font-bold text-cyan-600 hover:text-cyan-700"
            >
              Register
            </Link>

          </p>

        </div>
      </div>
    </div>
  );
}
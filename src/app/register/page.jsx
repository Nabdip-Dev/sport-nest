"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelfun = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f5fbff] via-white to-[#eef7ff] px-6 py-10">

      <div className="w-full max-w-md rounded-[30px] border border-cyan-100 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

        {/* HEADING */}
        <div className="mb-8 text-center">

          <div className="mb-4 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold tracking-wide text-cyan-700">
            SPORTNEST REGISTER
          </div>

          <h2 className="text-4xl font-black text-slate-900">
            Create Account
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Join SportNest and start booking premium sports facilities.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit(handelfun)}
          className="space-y-5"
        >

          {/* NAME */}
          <div>

            <label className="mb-2 block text-sm font-bold text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Name is required",
              })}
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}

          </div>

          {/* EMAIL */}
          <div>

            <label className="mb-2 block text-sm font-bold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
              })}
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* PHOTO URL */}
          <div>

            <label className="mb-2 block text-sm font-bold text-slate-700">
              Photo URL
            </label>

            <input
              type="text"
              placeholder="Enter your photo url"
              {...register("photo")}
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
            />

          </div>

          {/* PASSWORD */}
          <div>

            <label className="mb-2 block text-sm font-bold text-slate-700">
              Password
            </label>

            <div className="relative">

              <input
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 pr-14 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
              >
                {show ? "👁️" : "🙈"}
              </button>

            </div>

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* REGISTER BUTTON */}
          <button
            type="submit"
            className="mt-2 h-14 w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Create Account
          </button>

        </form>

        {/* DIVIDER */}
        <div className="my-7 flex items-center gap-3">

          <div className="h-[1px] w-full bg-slate-200" />

          <span className="text-sm font-semibold text-slate-400">
            OR
          </span>

          <div className="h-[1px] w-full bg-slate-200" />

        </div>

        {/* GOOGLE BUTTON */}
        <button
          className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50"
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            alt="google"
            className="h-5 w-5"
          />

          Continue with Google

        </button>

        {/* LOGIN LINK */}
        <p className="mt-8 text-center text-sm text-slate-500">

          Already have an account?{" "}

          <Link
            href="/login"
            className="font-bold text-cyan-600 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}
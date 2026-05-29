"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {

  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit: rhfSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.photo,
    });

    if (error) {
      toast.error(error.message || "Signup Failed");
      return;
    }

    toast.success("Account Created Successfully!");

    setTimeout(() => {
      router.push("/");
    }, 1500);
  };


  const handleGoogleSing = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f5fbff] via-white to-[#eef7ff] px-4 py-6">

      <div className="w-full max-w-2xl rounded-2xl border border-cyan-100 bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

        {/* HEADING */}
        <div className="mb-6 text-center">

          <div className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[10px] font-bold tracking-wide text-cyan-700">
            SPORTNEST REGISTER
          </div>

          <h2 className="text-2xl font-black text-slate-900">
            Create Account
          </h2>

          <p className="mt-2 text-xs text-slate-500">
            Join SportNest and start booking premium sports facilities.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* GRID */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* NAME */}
            <div>

              <label className="mb-1 block text-xs font-bold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]"
              />

              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}

            </div>

            {/* EMAIL */}
            <div>

              <label className="mb-1 block text-xs font-bold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]"
              />

              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}

            </div>

            {/* PHOTO URL */}
            <div>

              <label className="mb-1 block text-xs font-bold text-slate-700">
                Photo URL
              </label>

              <input
                type="text"
                placeholder="Enter your photo url"
                {...register("photo")}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="mb-1 block text-xs font-bold text-slate-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 pr-10 text-xs text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-500 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]"
                />

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
                >
                  {show ? "👁️" : "🙈"}
                </button>

              </div>

              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}

            </div>

          </div>

          {/* REGISTER BUTTON */}
          <button
            type="submit"
            className="h-11 w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 text-xs font-bold tracking-wide text-white shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            Create Account
          </button>

        </form>

        {/* DIVIDER */}
        <div className="my-5 flex items-center gap-2">

          <div className="h-[1px] w-full bg-slate-200" />

          <span className="text-xs font-semibold text-slate-400">
            OR
          </span>

          <div className="h-[1px] w-full bg-slate-200" />

        </div>

        {/* GOOGLE BUTTON */}
        <button onClick={handleGoogleSing}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50"
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            alt="google"
            className="h-4 w-4"
          />

          Continue with Google

        </button>

        {/* LOGIN LINK */}
        <p className="mt-6 text-center text-xs text-slate-500">

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
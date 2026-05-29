"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {

  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (error) {
      toast.error(error.message || "Login Failed");
      return;
    }

    toast.success("Login Successfully!");

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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-4 py-6">

      <div className="w-full max-w-sm rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 p-[1px] shadow-xl">

        <div className="rounded-2xl bg-white/90 p-5 backdrop-blur-2xl">

          {/* TOP */}
          <div className="text-center">

            <div className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
              Welcome Back
            </div>

            <h2 className="mt-3 text-2xl font-black text-slate-900">
              Login Account
            </h2>

            <p className="mt-2 text-xs text-slate-500">
              Login to continue your sports journey
            </p>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            {/* EMAIL */}
            <div>

              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Email Address
              </label>

              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="h-[45px] w-full rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-800 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="mb-1 block text-xs font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">

                <input
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-[45px] w-full rounded-xl border border-slate-200 bg-white px-3 pr-10 text-xs text-slate-800 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
                >
                  {show ? "👁️" : "🙈"}
                </button>

              </div>

            </div>

            {/* FORGOT */}
            <div className="flex justify-end">

              <button
                type="button"
                className="text-xs font-semibold text-cyan-600 hover:text-cyan-700"
              >
                Forgot Password?
              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 py-3 text-xs font-bold tracking-wide text-white shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              Login Account
            </button>

          </form>

          {/* DIVIDER */}
          <div className="relative my-5">

            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>

            <div className="relative flex justify-center">

              <span className="bg-white px-3 text-xs text-slate-400">
                OR
              </span>

            </div>

          </div>

          {/* GOOGLE */}
          <button onClick={handleGoogleSing}
            className="flex h-[45px] w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50"
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="google"
              className="h-4 w-4"
            />

            Continue with Google

          </button>

          {/* REGISTER */}
          <p className="mt-5 text-center text-xs text-slate-500">

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
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function Login() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelfun = async (data) => {
    setLoading(true);

    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error?.message || "Login failed");
        return;
      }

      // 🔥 SUCCESS TOAST
      toast.success("Login successful 🎉", {
        duration: 3000,
      });

      // ⏱ wait until toast finishes
      await new Promise((r) => setTimeout(r, 3000));

      // 🚀 redirect
      router.push("/");

    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handelgooglesin = async () => {
    try {
      toast.loading("Redirecting to Google...", { id: "google" });

      await authClient.signIn.social({
        provider: "google",
      });

      toast.success("Google login started", { id: "google" });
    } catch (err) {
      toast.error("Google login failed", { id: "google" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:py-15">

      {/* GLOBAL TOASTER */}
      <Toaster position="top-right" />

      <div className="w-full max-w-md p-[1px] rounded-2xl bg-gradient-to-l from-[#0022ff] via-purple-700 to-[#00d5ff]">

        <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Login to continue
          </p>

          <form onSubmit={handleSubmit(handelfun)} className="space-y-4">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
              })}
              className="input bg-white border border-[#b8b8b89b] text-[#494949] input-bordered w-full rounded-xl focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">
                {errors.email.message}
              </p>
            )}

            {/* PASSWORD */}
            <div className="relative">

              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="input bg-white border border-[#b8b8b89b] text-[#494949] input-bordered w-full rounded-xl pr-10 focus:outline-none focus:ring-1 focus:ring-[#331300b6]"
              />

              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer select-none"
              >
                {show ? "👁️" : "🙈"}
              </span>

            </div>

            {errors.password && (
              <p className="text-red-600 text-sm">
                {errors.password.message}
              </p>
            )}

            {/* BUTTON */}
            <button
              disabled={loading}
              className="w-full py-2 rounded-xl text-white font-semibold bg-gradient-to-l from-[#0b003c] to-[#1f02ff] hover:scale-105 transition duration-300 shadow-md disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          {/* OR */}
          <div className="flex items-center gap-4 my-6">
            <hr className="flex-1 border-t border-gray-400/30 " />
            <span className="text-gray-400 font-medium">OR</span>
            <hr className="flex-1 border-t border-gray-400/30 " />
          </div>

          {/* GOOGLE */}
          <button
            onClick={handelgooglesin}
            className="btn w-full flex items-center gap-3 rounded-xl text-black bg-white border border-[#b8b8b89b] hover:border-[#0015ff] hover:bg-[#b8b0ff73] transition "
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              className="w-5"
              alt="google"
            />
            Continue with Google
          </button>

          {/* REGISTER */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/register" className="text-blue-500 font-semibold hover:underline">
              Register
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
}
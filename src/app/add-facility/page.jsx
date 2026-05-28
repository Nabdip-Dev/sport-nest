
"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";

import {
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaImage,
  FaEnvelope,
  FaPhoneAlt,
  FaBasketballBall,
  FaFileAlt,
  FaFutbol,
} from "react-icons/fa";

export default function AddFacility() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    image: "",
    sport: "",
    price: "",
    open: "",
    close: "",
    email: "",
    phone: "",
    phoneCode: "+91",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formValid =
    formData.name.trim() &&
    formData.location.trim() &&
    formData.image.trim() &&
    formData.sport.trim();

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const required = ["name", "location", "image", "sport"];

    const hasError = required.some((f) => !formData[f].trim());

    if (hasError) {
      toast.error("Please fill required fields!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/destination", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Facility Added Successfully!");

        setFormData({
          name: "",
          location: "",
          image: "",
          sport: "",
          price: "",
          open: "",
          close: "",
          email: "",
          phone: "",
          phoneCode: "+91",
          description: "",
        });

        setSubmitted(false);
      } else {
        toast.error("Failed To Add Facility!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error!");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4faff] px-3 py-6">

      {/* BG */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mx-auto mb-4 max-w-3xl rounded-[28px] border border-white/60 bg-white/70 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <motion.h1
              whileHover={{ x: 3 }}
              className="text-xl font-black tracking-tight text-slate-800"
            >
              Add Facility
            </motion.h1>

            <p className="mt-1 text-xs text-slate-500">
              Sports booking form
            </p>
          </div>

          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-xl text-white shadow-lg"
          >
            <FaFutbol />
          </motion.div>
        </div>
      </motion.div>

      {/* FORM */}
      <motion.form
        onSubmit={onSubmit}
        className="relative z-10 mx-auto grid max-w-3xl gap-3 rounded-[30px] border border-white/60 bg-white/75 p-4 shadow-[0_10px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl md:grid-cols-2"
      >

        <Input
          label="Facility"
          icon={<FaBuilding />}
          placeholder="Enter facility name"
          name="name"
          required
          submitted={submitted}
          value={formData.name}
          onChange={handleChange}
        />

        <SelectField
          submitted={submitted}
          value={formData.sport}
          onChange={handleChange}
        />

        <Input
          label="Location"
          icon={<FaMapMarkerAlt />}
          placeholder="Enter facility location"
          name="location"
          required
          submitted={submitted}
          value={formData.location}
          onChange={handleChange}
        />

        <Input
          label="Price"
          icon={<FaMoneyBillWave />}
          placeholder="Enter booking price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <Input
          label="Open"
          icon={<FaClock />}
          type="time"
          name="open"
          value={formData.open}
          onChange={handleChange}
        />

        <Input
          label="Close"
          icon={<FaClock />}
          type="time"
          name="close"
          value={formData.close}
          onChange={handleChange}
        />

        <Input
          label="Image URL"
          icon={<FaImage />}
          placeholder="Paste image url"
          name="image"
          required
          submitted={submitted}
          value={formData.image}
          onChange={handleChange}
        />

        <Input
          label="Email"
          icon={<FaEnvelope />}
          type="email"
          placeholder="Enter email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* PHONE */}
        <motion.div className="space-y-1">
          <label className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500">
            <FaPhoneAlt />
            Phone
          </label>

          <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <select
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
              className="cursor-pointer bg-cyan-50 px-2 text-xs text-slate-700 outline-none"
            >
              <option value="+91">+91</option>
              <option value="+880">+880</option>
              <option value="+1">+1</option>
            </select>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full cursor-pointer px-3 py-2 text-sm text-slate-700 outline-none"
            />
          </div>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div className="space-y-1 md:col-span-2">
          <label className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500">
            <FaFileAlt />
            Description
          </label>

          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            placeholder="Write facility details..."
            className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none"
          />
        </motion.div>

        {/* BUTTON */}
        <motion.button
          type="submit"
          disabled={!formValid}
          whileHover={{ scale: formValid ? 1.02 : 1 }}
          whileTap={{ scale: formValid ? 0.96 : 1 }}
          className={`md:col-span-2 rounded-2xl py-2.5 text-sm font-bold text-white shadow-lg ${
            formValid
              ? "bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"
              : "cursor-not-allowed bg-slate-300"
          }`}
        >
          Submit Facility
        </motion.button>
      </motion.form>
    </section>
  );
}

/* INPUT */
const Input = ({
  label,
  icon,
  required,
  submitted,
  value,
  onChange,
  placeholder,
  ...props
}) => {
  const showError = submitted && required && !value?.trim();

  return (
    <motion.div whileHover={{ y: -2 }} className="space-y-1">
      <label className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500">
        {icon}
        {label}
        {required && <span className="ml-1 text-red-500">***</span>}
      </label>

      <input
        {...props}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full cursor-pointer rounded-2xl border bg-white px-3 py-2 text-sm text-slate-700 outline-none
        transition-all duration-300 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-100 focus:border-cyan-500
        ${
          showError
            ? "border-red-500 focus:border-red-500"
            : "border-slate-200"
        }`}
      />
    </motion.div>
  );
};

/* SELECT */
const SelectField = ({ submitted, value, onChange }) => {
  const showError = submitted && !value;

  return (
    <motion.div whileHover={{ y: -2 }} className="space-y-1">
      <label className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500">
        <FaBasketballBall />
        Sport <span className="text-red-500">***</span>
      </label>

      <select
        name="sport"
        value={value}
        onChange={onChange}
        className={`w-full cursor-pointer rounded-2xl border bg-white px-3 py-2 text-sm text-slate-700 outline-none
        transition-all duration-300 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-100 focus:border-cyan-500
        ${
          showError
            ? "border-red-500 focus:border-red-500"
            : "border-slate-200"
        }`}
      >
        <option value="">Select sport</option>
        <option value="Football">⚽ Football</option>
        <option value="Cricket">🏏 Cricket</option>
        <option value="Badminton">🏸 Badminton</option>
        <option value="Basketball">🏀 Basketball</option>
        <option value="Tennis">🎾 Tennis</option>
      </select>
    </motion.div>
  );
};


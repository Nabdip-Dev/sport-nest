"use client";

import { authClient } from "@/lib/auth-client";
import { useState, } from "react";
import toast from "react-hot-toast";
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    const { data: tokenData } = await authClient.token()
    // console.log(tokenData);

    try {
      const res = await fetch("http://localhost:5000/destination", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${tokenData.token}`, 
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
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-[#abfcf941] to-[#baffdb00] px-6 py-12">
      {/* Header */}
      <div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-white bg-gradient-to-b from-sky-50 to-blue-100 px-8 py-2 shadow-xl transition-transform duration-500 hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-blue-800">Add Facility</h1>
            <p className="text-sm text-gray-500 mt-2">Sports booking form</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 text-white shadow-lg">
            <FaFutbol size={24} />
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="mx-auto max-w-3xl grid gap-6 overflow-auto rounded-3xl border border-white bg-gradient-to-b from-blue-50 p-8 shadow-xl transition-transform duration-500 hover:-translate-y-1 md:grid-cols-2"
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

        {/* Phone */}
        <div className="md:col-span-2 space-y-1">
          <label className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500">
            <FaPhoneAlt /> Phone
          </label>
          <div className="flex overflow-hidden rounded-2xl border border-blue-200 hover:border-blue-500 bg-white transition hover:shadow-lg">
            <select
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
              className="bg-gray-50 px-3 text-xs text-gray-700 outline-none"
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
              className="w-full px-3 py-2 text-sm text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Description */}
        <div className="md:col-span-2 space-y-1">
          <label className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500">
            <FaFileAlt /> Description
          </label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            placeholder="Write facility details..."
            className="w-full rounded-2xl border border-blue-200 hover:border-blue-500 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition hover:shadow-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!formValid}
          className={`md:col-span-2 rounded-2xl py-3 text-sm font-bold text-white transition-all duration-300 ${
            formValid
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 shadow-lg"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Submit Facility
        </button>
      </form>
    </section>
  );
}

/* Input Component */
const Input = ({ label, icon, required, submitted, value, onChange, placeholder, ...props }) => {
  const showError = submitted && required && !value?.trim();
  return (
    <div className="space-y-1 transition-transform duration-500 hover:scale-[1.02]">
      <label className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500">
        {icon} {label} {required && <span className="text-red-500">***</span>}
      </label>
      <input
        {...props}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl border hover:border-blue-500 bg-white/70 px-3 py-2 text-sm text-gray-700 outline-none transition hover:shadow-lg ${
          showError ? "border-red-500" : "border-blue-200"
        }`}
      />
    </div>
  );
};

/* Select Component */
const SelectField = ({ submitted, value, onChange }) => {
  const showError = submitted && !value;
  return (
    <div className="space-y-1 transition-transform duration-500 hover:scale-[1.02]">
      <label className="flex items-center gap-2 text-xs font-bold uppercase text-gray-500">
        <FaBasketballBall /> Sport <span className="text-red-500">***</span>
      </label>
      <select
        name="sport"
        value={value}
        onChange={onChange}
        className={`w-full rounded-2xl border hover:border-blue-500 px-3 py-2 text-sm text-gray-700 outline-none transition hover:shadow-lg ${
          showError ? "border-red-500" : "border-blue-200"
        }`}
      >
        <option value="">Select sport</option>
        <option value="Football">⚽ Football</option>
        <option value="Cricket">🏏 Cricket</option>
        <option value="Badminton">🏸 Badminton</option>
        <option value="Basketball">🏀 Basketball</option>
        <option value="Tennis">🎾 Tennis</option>
      </select>
    </div>
  );
};
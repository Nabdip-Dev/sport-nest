"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    FaEdit,
} from "react-icons/fa";

const EditModal = ({ facility, fetchFacilities }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: facility?.name || "",
        location: facility?.location || "",
        image: facility?.image || "",
        sport: facility?.sport || "",
        price: facility?.price || "",
        open: facility?.open || "",
        close: facility?.close || "",
        email: facility?.email || "",
        phone: facility?.phone || "",
        phoneCode: facility?.phoneCode || "+91",
        description: facility?.description || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!facility?._id) {
            toast.error("Facility ID not found!");
            return;
        }

        // ONLY SEND NON-EMPTY FIELDS
        const filteredData = Object.fromEntries(
            Object.entries(formData).filter(
                ([key, value]) => value !== ""
            )
        );

        try {
            const res = await fetch(
                `http://localhost:5000/destination/${facility._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(filteredData),
                }
            );

            const data = await res.json();

            if (res.ok) {
                toast.success("Facility Updated Successfully!");

                // REFRESH DATA WITHOUT RELOAD
                if (fetchFacilities) {
                    fetchFacilities();
                }


                document.getElementById("edit_modal").close();
                router.refresh();
            } else {
                toast.error(data?.message || "Update Failed!");
            }
        } catch (error) {
            console.log(error);
            toast.error("Server Error!");
        }
    };

    return (
        <div>
            {/* OPEN BUTTON */}
            <button
                className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white border-none"
                onClick={() =>
                    document.getElementById("edit_modal").showModal()
                }
            >
                <FaEdit />
                Edit
            </button>

            {/* MODAL */}
            <dialog id="edit_modal" className="modal">
                <div className="modal-box max-w-4xl p-0 bg-transparent shadow-none">
                    <section className="relative overflow-hidden bg-[#f4faff] px-3 py-5 rounded-3xl">

                        {/* BG */}
                        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>

                        {/* CLOSE */}
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle text-black bg-transparent absolute right-4 top-4 z-50">
                                ✕
                            </button>
                        </form>

                        {/* FORM */}
                        <motion.form
                            onSubmit={onSubmit}
                            className="relative z-10 mx-auto grid max-w-3xl gap-3 rounded-[30px] py-3 backdrop-blur-2xl md:grid-cols-2"
                        >

                            <Input
                                label="Facility"
                                icon={<FaBuilding />}
                                placeholder="Enter facility name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <SelectField
                                value={formData.sport}
                                onChange={handleChange}
                            />

                            <Input
                                label="Location"
                                icon={<FaMapMarkerAlt />}
                                placeholder="Enter facility location"
                                name="location"
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
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.96 }}
                                className="md:col-span-2 rounded-2xl py-2.5 text-sm font-bold text-white shadow-lg bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"
                            >
                                Save Facility
                            </motion.button>
                        </motion.form>
                    </section>
                </div>
            </dialog>
        </div>
    );
};

export default EditModal;

/* INPUT */
const Input = ({
    label,
    icon,
    value,
    onChange,
    placeholder,
    ...props
}) => {
    return (
        <motion.div whileHover={{ y: -2 }} className="space-y-1">
            <label className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500">
                {icon}
                {label}
            </label>

            <input
                {...props}
                value={value || ""}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none
        transition-all duration-300 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-100 focus:border-cyan-500"
            />
        </motion.div>
    );
};

/* SELECT */
const SelectField = ({ value, onChange }) => {
    return (
        <motion.div whileHover={{ y: -2 }} className="space-y-1">
            <label className="flex items-center gap-2 text-[11px] font-bold uppercase text-slate-500">
                <FaBasketballBall />
                Sport
            </label>

            <select
                name="sport"
                value={value}
                onChange={onChange}
                className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none
        transition-all duration-300 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-100 focus:border-cyan-500"
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
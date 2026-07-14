import CancelModal from '@/components/CancelModal';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const MyBookings = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const tokenObj = await auth.api.getToken({ headers: await headers() });
    const tokenString = tokenObj.token;
    // console.log("Token:", tokenString);


    const res = await fetch(
        `http://localhost:5000/booking/${user?.id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${tokenString}`,
            "Content-Type": "application/json"
        }
    });

    const booking = await res.json();

    return (
        <div>
            <div className="max-w-5xl mx-auto mt-8 px-6 py-6 flex items-center justify-between bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">

                <h1 className="text-3xl font-bold text-gray-900">
                    My Bookings
                </h1>

                <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Bookings</span>
                    <span className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                        {booking?.length || 0}
                    </span>
                </div>

            </div>

            <div className="flex flex-col w-full max-w-5xl justify-center mx-auto px-6  gap-6 my-8">
                {booking.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            No bookings found
                        </h2>
                        <p className="text-gray-600 mb-6">
                             Browse our available facilities and book the one that suits your needs.
                        </p>
                        <Link href="/facilities">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Browse Facilities
                            </button>
                        </Link>
                    </div>
                ) : (booking?.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-5">

                            <img
                                src={item.facilityImage}
                                alt={item.facilityName}
                                className="w-full md:col-span-2 h-65 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none transition-transform duration-500 ease-in-out transform hover:scale-105"
                            />

                            <div className="p-6 md:col-span-3 flex flex-col justify-between">
                                <div>

                                    <div className="flex items-center justify-between mb-3">
                                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
                                            {item.facilitySport}
                                        </span>

                                        <span className="text-xl font-bold text-green-600">
                                            ${item.price}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                                        {item.facilityName}
                                    </h2>

                                    <p className="text-gray-500 text-sm flex items-center gap-1">
                                        📍 {item.facilityLocation}
                                    </p>

                                    <div className="flex flex-row justify-between mt-4 border-t border-gray-200 pt-4 space-y-2">

                                        <div>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-semibold">Booking Date:</span>{" "}
                                                {item.bookingDate}
                                            </p>

                                            <p className="text-sm text-gray-600">
                                                <span className="font-semibold">Booked By:</span>{" "}
                                                {item.userName}
                                            </p>

                                            <p className="text-sm text-gray-600 truncate">
                                                <span className="font-semibold">Email:</span>{" "}
                                                {item.userEmail}
                                            </p>
                                        </div>

                                        <div className="flex justify-end items-end">

                                            {/* ✅ ONLY FIX: item passed correctly */}
                                            <CancelModal item={item} />

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                )))}

            </div>
        </div>
    );
};


export default MyBookings;
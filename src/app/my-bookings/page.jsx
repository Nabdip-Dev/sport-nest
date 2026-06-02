import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { MdOutlineCancel } from 'react-icons/md';


const MyBookings = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;
    console.log(user);

    const res = await fetch(
        `http://localhost:5000/booking/${user?.id}`
    );
    const booking = await res.json();
    console.log(booking);

    return (
        <div className=''>
            <div>
                <h1>My Bookings</h1>
            </div>
            <div className="flex flex-col w-full max-w-5xl justify-center mx-auto gap-6 mt-8">
                {booking?.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-5">
                            {/* Image */}
                            <img
                                src={item.facilityImage}
                                alt={item.facilityName}
                                className="w-full md:col-span-2 h-65 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none transition-transform duration-500 ease-in-out transform hover:scale-105"
                            />

                            {/* Details */}
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

                                        <div>
                                            <button className="flex-1 btn bg-transparent border border-red-500 hover:bg-red-600 text-red-500 hover:text-white rounded-lg font-medium transition-colors duration-300 shadow-sm hover:shadow-md">
                                                <ImCancelCircle /> Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
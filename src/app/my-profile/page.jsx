"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Link from "next/link";
import { FaEdit, FaTrash, FaEnvelope, FaUser } from "react-icons/fa";
import { MdVerified } from "react-icons/md";


export default function MyProfile() {

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;


    const [deleting, setDeleting] = useState(false);



    const deleteAccount = async () => {


        const confirmDelete = confirm(
            "Are you sure you want to delete your account?"
        );


        if (!confirmDelete) return;


        try {

            setDeleting(true);


            const token = await authClient.getToken();


            await fetch(
                "http://localhost:5000/profile",
                {
                    method: "DELETE",

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );


            await authClient.signOut();


            window.location.href = "/";


        } catch (error) {

            console.log(error);

        } finally {

            setDeleting(false);

        }

    };



    if (isPending) {

        return (

            <div className="min-h-screen flex justify-center items-center">

                <span className="loading loading-spinner text-black"></span>

            </div>

        );

    }



    if (!user) {

        return (

            <div className="min-h-screen flex justify-center items-center">

                <h2 className="text-black text-2xl font-bold">
                    Please Login First
                </h2>

            </div>

        );

    }



    return (

        <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-blue-100 p-6">


            <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden border">


                {/* Cover */}

                <div className="h-40 bg-gradient-to-r from-slate-900 to-blue-700">
                    
                </div>



                {/* Profile */}

                <div className="px-10 pb-10 -mt-20 text-center">


                    <img
                        src={
                            user.image ||
                            "https://i.ibb.co/4pDNDk1/avatar.png"
                        }
                        alt="profile"
                        className="w-36 h-36 mx-auto rounded-full border-8 border-white shadow-xl object-cover"
                    />



                    <h1 className="text-4xl font-extrabold text-black mt-5 flex justify-center items-center gap-2">

                        {user.name}

                        <MdVerified className="text-blue-600"/>

                    </h1>



                    <p className="text-black font-medium mt-2">
                        {user.email}
                    </p>



                </div>





                {/* Details */}


                <div className="grid md:grid-cols-2 gap-6 px-10">


                    <div className="bg-white border rounded-3xl p-7 shadow-lg">


                        <h2 className="text-2xl font-bold text-black mb-6">
                            Personal Information
                        </h2>



                        <div className="space-y-5">


                            <div className="flex items-center gap-4">

                                <FaUser className="text-black"/>

                                <div>

                                    <p className="text-sm text-black">
                                        Name
                                    </p>

                                    <p className="font-bold text-black">
                                        {user.name}
                                    </p>

                                </div>

                            </div>





                            <div className="flex items-center gap-4">

                                <FaEnvelope className="text-black"/>

                                <div>

                                    <p className="text-sm text-black">
                                        Email
                                    </p>

                                    <p className="font-bold text-black">
                                        {user.email}
                                    </p>

                                </div>

                            </div>


                        </div>


                    </div>






                    <div className="bg-white border rounded-3xl p-7 shadow-lg">


                        <h2 className="text-2xl font-bold text-black mb-6">
                            Account Details
                        </h2>



                        <p className="text-black font-semibold">
                            User ID
                        </p>


                        <p className="text-black break-all mt-2">
                            {user.id}
                        </p>


                    </div>



                </div>





                {/* Buttons */}


                <div className="flex justify-center gap-5 py-10">


                    <Link href="/my-profile/edit">

                        <button
                            className="
                            flex items-center gap-2
                            bg-black
                            text-white
                            px-8 py-3
                            rounded-full
                            font-bold
                            hover:bg-blue-700
                            transition
                            "
                        >

                            <FaEdit/>

                            Edit Profile

                        </button>


                    </Link>





                    <button

                        onClick={deleteAccount}

                        className="
                        flex items-center gap-2
                        bg-red-600
                        text-white
                        px-8 py-3
                        rounded-full
                        font-bold
                        hover:bg-red-700
                        transition
                        "

                    >

                        <FaTrash/>

                        {deleting ? "Deleting..." : "Delete Account"}

                    </button>


                </div>




            </div>


        </div>

    );

}
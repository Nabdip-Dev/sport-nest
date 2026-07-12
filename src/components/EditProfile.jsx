"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfile() {

    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [name, setName] = useState(user?.name || "");
    const [image, setImage] = useState(user?.image || "");
    const handleSubmit = async (e) => {

        e.preventDefault();


        try {
            const result = await authClient.updateUser({
                name: name,
                image: image
            });

            if (result.error) {
                alert(result.error.message);
                return;
            }

            alert("Profile Updated Successfully");

            router.push("/my-profile");

            router.refresh();

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="min-h-screen bg-blue-50 flex justify-center items-center p-5">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-xl"
            >

                <h1 className="text-3xl font-bold text-black mb-8">
                    Edit Profile
                </h1>

                <label className="text-black font-semibold">
                    Name
                </label>

                <input

                    className="input input-bordered w-full mb-5 text-white"

                    value={name}

                    onChange={(e) => setName(e.target.value)}

                />





                <label className="text-black font-semibold">
                    Image URL
                </label>


                <input

                    className="input input-bordered w-full mb-8 text-white"

                    value={image}

                    onChange={(e) => setImage(e.target.value)}

                />





                <button

                    className="
                w-full
                bg-black
                text-white
                py-3
                rounded-full
                font-bold
                hover:bg-blue-700
                transition
                "

                >

                    Save Changes

                </button>



            </form>


        </div>

    );

}
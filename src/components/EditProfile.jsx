"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

import {
    FaUserEdit,
    FaImage
} from "react-icons/fa";


export default function EditProfile() {


    const router = useRouter();


    const { data: session, isPending } = authClient.useSession();


    const user = session?.user;



    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const [loading, setLoading] = useState(false);





    useEffect(() => {

        if (user) {

            setName(user.name || "");
            setImage(user.image || "");

        }

    }, [user]);








    const handleSubmit = async (e) => {


        e.preventDefault();


        try {


            setLoading(true);



            const result = await authClient.updateUser({

                name: name,
                image: image

            });





            if (result.error) {


                toast.error(
                    result.error.message
                );


                return;

            }


            toast.success(
                "Profile updated successfully"
            );

            setTimeout(() => {


                router.push("/my-profile");

                router.refresh();


            }, 1000);

        }
        catch (error) {


            console.log(error);


            toast.error(
                "Something went wrong!"
            );

        }
        finally {

            setLoading(false);

        }


    };

    if (isPending) {

        return (

            <div className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-blue-50
            ">


                <span className="
                loading
                loading-spinner
                text-blue-600
                loading-lg
                "></span>


            </div>

        );
    }

    return (


        <div className="
        min-h-screen
        bg-gradient-to-br
        from-blue-50
        via-white
        to-slate-100
        flex
        items-center
        justify-center
        px-4
        py-10
        ">






            <motion.form


                initial={{
                    opacity: 0,
                    y: 30
                }}


                animate={{
                    opacity: 1,
                    y: 0
                }}


                transition={{
                    duration: 0.5
                }}



                onSubmit={handleSubmit}



                className="
                w-full
                max-w-md
                bg-white/90
                backdrop-blur-xl
                rounded-[30px]
                shadow-xl
                border
                border-gray-100
                p-7
                "


            >







                <div className="
                text-center
                mb-7
                ">


                    <div className="
                    w-16
                    h-16
                    mx-auto
                    rounded-2xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    mb-4
                    ">


                        <FaUserEdit className="
                        text-blue-600
                        text-2xl
                        "/>


                    </div>





                    <h1 className="
                    text-3xl
                    font-bold
                    text-gray-900
                    ">

                        Edit Profile

                    </h1>




                    <p className="
                    text-gray-500
                    text-sm
                    mt-2
                    ">

                        Update your account information

                    </p>



                </div>









                <label className="
                text-sm
                font-semibold
                text-gray-700
                ">

                    Name

                </label>



                <input


                    type="text"


                    value={name}


                    onChange={(e)=>setName(e.target.value)}


                    placeholder="Enter your name"


                    className="
                    w-full
                    mt-2
                    mb-5
                    px-4
                    py-3
                    rounded-xl
                    bg-gray-50
                    border
                    border-gray-200
                    text-gray-800
                    outline-none
                    focus:ring-2
                    focus:ring-blue-400
                    transition
                    "


                />









                <label className="
                text-sm
                font-semibold
                text-gray-700
                ">

                    Image URL

                </label>






                <div className="
                relative
                mt-2
                ">


                    <FaImage className="
                    absolute
                    left-4
                    top-4
                    text-gray-400
                    "/>





                    <input


                        type="text"


                        value={image}


                        onChange={(e)=>setImage(e.target.value)}


                        placeholder="Paste image URL"



                        className="
                        w-full
                        pl-11
                        pr-4
                        py-3
                        rounded-xl
                        bg-gray-50
                        border
                        border-gray-200
                        text-gray-800
                        outline-none
                        focus:ring-2
                        focus:ring-blue-400
                        transition
                        "


                    />



                </div>









                {
                    image &&

                    <motion.img


                        initial={{
                            opacity:0,
                            scale:.8
                        }}


                        animate={{
                            opacity:1,
                            scale:1
                        }}


                        transition={{
                            duration:.3
                        }}



                        src={image}


                        alt="Preview"


                        className="
                        w-24
                        h-24
                        mx-auto
                        mt-6
                        rounded-full
                        object-cover
                        border-4
                        border-white
                        shadow-lg
                        "


                    />

                }









                <motion.button


                    whileHover={{
                        scale:1.03
                    }}


                    whileTap={{
                        scale:.97
                    }}



                    disabled={loading}



                    className="
                    w-full
                    mt-7
                    bg-blue-600
                    hover:bg-blue-700
                    disabled:bg-blue-300
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    shadow-md
                    transition
                    "


                >



                    {
                        loading
                        ?
                        "Saving..."
                        :
                        "Save Changes"
                    }



                </motion.button>

            </motion.form>

        </div>


    );

}
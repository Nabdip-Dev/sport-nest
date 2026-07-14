"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Link from "next/link";

import {
  FaEdit,
  FaTrash,
  FaEnvelope,
  FaUser,
  FaIdCard
} from "react-icons/fa";

import { MdVerified } from "react-icons/md";

import { motion } from "framer-motion";
import { toast } from "react-hot-toast";



export default function MyProfile() {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {

    return (

      <div className=" min-h-screen
      flex
      justify-center
      items-center
      bg-blue-50
      ">


        <span className="
        loading
        loading-spinner
        text-blue-600
        "></span>


      </div>

    );


  }


  if (!user) {


    return (

      <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-blue-50
      ">

        <h2 className="
        text-2xl
        font-bold
        text-gray-800
        ">

          Please Login First

        </h2>


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
px-4
py-8
">

      <motion.div


        initial={{
          opacity: 0,
          y: 25
        }}


        animate={{
          opacity: 1,
          y: 0
        }}


        transition={{
          duration: .5
        }}

        className="
max-w-3xl
mx-auto
bg-white/90
backdrop-blur-xl
rounded-3xl
shadow-xl
border
border-gray-100
overflow-hidden
"

      >

        {/* cover */}

        <div className="
h-28
bg-gradient-to-r
from-blue-100
via-indigo-100
to-purple-100
">

        </div>

        {/* profile */}


        <div className="
text-center
-translate-y-12
px-5
">






          <motion.img


            initial={{
              scale: .85,
              opacity: 0
            }}


            animate={{
              scale: 1,
              opacity: 1
            }}


            transition={{
              duration: .4
            }}



            src={
              user.image ||
              "https://i.ibb.co/4pDNDk1/avatar.png"
            }



            alt="profile"



            className="
w-24
h-24
mx-auto
rounded-full
object-cover
border-8
border-white
shadow-lg
"


          />







          <h1 className="
mt-4
text-2xl
md:text-3xl
font-bold
text-gray-900
flex
justify-center
items-center
gap-2
">


            {user.name}


            <MdVerified className="
text-blue-500
text-xl
"/>


          </h1>

          <p className="
mt-2
text-gray-500
text-sm
">
            {user.email}

          </p>

        </div>

        <div className="
grid
md:grid-cols-2
gap-4
px-5
pb-6
">

          <motion.div

            whileHover={{
              y: -3
            }}


            className="
bg-white
rounded-2xl
p-5
border
shadow-sm
"


          >


            <h2 className="
text-lg
font-bold
text-gray-800
mb-4
">
              Personal Info

            </h2>

            <div className="
space-y-4
">


              <div className="
flex
items-center
gap-3
">


                <div className="
bg-blue-100
p-3
rounded-xl
">

                  <FaUser className="
text-blue-600
"/>

                </div>

                <div>

                  <p className="
text-xs
text-gray-400
">

                    Name

                  </p>


                  <p className="
font-semibold
text-gray-800
">

                    {user.name}

                  </p>

                </div>

              </div>

              <div className="
flex
items-center
gap-3
">


                <div className="
bg-purple-100
p-3
rounded-xl
">

                  <FaEnvelope className="
text-purple-600
"/>

                </div>



                <div>

                  <p className="
text-xs
text-gray-400
">

                    Email

                  </p>


                  <p className="
font-semibold
text-gray-800
break-all
">

                    {user.email}

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          <motion.div


            whileHover={{
              y: -3
            }}



            className="
bg-white
rounded-2xl
p-5
border
shadow-sm
"


          >


            <h2 className="
text-lg
font-bold
text-gray-800
mb-4
">
              Account

            </h2>

            <div className="
flex
items-center
gap-3
bg-gray-50
rounded-xl
p-4
">

              <div className="
bg-green-100
p-3
rounded-xl
">

                <FaIdCard className="
text-green-600
"/>
              </div>

              <div>

                <p className="
text-xs
text-gray-400
">
                  User ID

                </p>


                <p className="
text-sm
font-semibold
text-gray-700
break-all
">
                  {user.id}

                </p>

              </div>

            </div>

          </motion.div>

        </div>


        <div className="
flex
flex-col
sm:flex-row
justify-center
gap-3
pb-7
px-5
">

          <Link href="/my-profile/edit">


            <motion.button


              whileHover={{
                scale: 1.03
              }}


              whileTap={{
                scale: .97
              }}



              className="
flex
justify-center
items-center
gap-2
bg-blue-600
hover:bg-blue-700
text-white
px-7
py-3
rounded-xl
font-semibold
shadow-md
"

            >
              <FaEdit />
              Edit Profile
            </motion.button>

          </Link>

          

        </div>

      </motion.div>

    </div>


  );


}
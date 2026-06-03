
import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";
import FacilitiesDetailsClient from "@/components/FacilitiesDetailsClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { cookies } from "next/headers";


const FacilitiesDetailsPage = async ({ params }) => {
    const { id } = await params

    const cookieStore = await cookies();
    const token = cookieStore.get("better-auth.session_token")?.value;
    // console.log(token);

    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const facility = await res.json();
    const { _id, name, sport, price, open, close, description, image, location, email, phone, phoneCode } = facility


    return (
        <div className="flex-col pt-6 pb-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center px-3 text-black">

            <div className="w-full max-w-5xl">
                <div className="pb-6 flex  gap-4 justify-end items-end">
                    <span> <EditModal facility={facility} /> </span>
                    <span> <DeleteModal facility={facility} /> </span>
                </div>
            </div>

            <FacilitiesDetailsClient facility={facility} />

        </div>
    );


};


export default FacilitiesDetailsPage;
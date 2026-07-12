
import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";
import FacilitiesDetailsClient from "@/components/FacilitiesDetailsClient";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const FacilitiesDetailsPage = async ({ params }) => {
    const { id } = await params

    const tokenObj = await auth.api.getToken({ headers: await headers() });
    const tokenString = tokenObj.token;

    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${tokenString}`,
            "Content-Type": "application/json"
        }
    });

    // const res = await fetch(`http://localhost:5000/destination/${id}`, {
    //     headers: {
    //         authorization: `Bearer ${token}`
    //     }
    // });

    const facility = await res.json();
    const { _id, name, sport, price, open, close, description, image, location, email, phone, phoneCode } = facility


    return (
        <div className="flex-col pt-6 pb-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 flex items-center justify-center px-3 text-black">

            <FacilitiesDetailsClient facility={facility} />

        </div>
    );


};


export default FacilitiesDetailsPage;
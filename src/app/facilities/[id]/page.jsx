

import FacilitiesDetailsClient from "@/components/FacilitiesDetailsClient";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTag } from "react-icons/fa";

const FacilitiesDetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const facility = await res.json();
    const { _id, name, sport, price, open, close, description, image, location, email, phone, phoneCode } = facility


    return <FacilitiesDetailsClient facility={facility} />;


};


export default FacilitiesDetailsPage;
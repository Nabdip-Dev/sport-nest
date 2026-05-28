import Link from "next/link";

const FacilitiesCard = ({ facility }) => {
    const { _id, name, sport, price, open, close, description, image, location } = facility
    return (
        <div>
            <div
                key={_id}
                className="group bg-white rounded-[28px] overflow-hidden border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

                {/* IMAGE */}
                <div className="relative p-3">

                    {
                        image ? (

                            <img
                                src={image}
                                alt={name}
                                className="w-full h-56 object-cover rounded-[22px] group-hover:scale-105 transition duration-700"
                            />

                        ) : (

                            <div className="w-full h-56 rounded-[22px] bg-blue-50 border border-dashed border-blue-200 flex items-center justify-center">

                                <h2 className="text-2xl font-bold text-slate-300">
                                    No Image
                                </h2>

                            </div>

                        )
                    }

                    {/* SPORT */}
                    <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-[#2563eb] shadow">
                        {sport}
                    </div>

                    {/* PRICE */}
                    <div className="absolute bottom-6 right-6 bg-[#2563eb] text-white px-4 py-2 rounded-xl shadow-lg">

                        <h3 className="font-black text-lg">
                            ₹{price}
                        </h3>

                        <p className="text-[10px] opacity-90">
                            per hour
                        </p>

                    </div>

                </div>

                {/* CONTENT */}
                <div className="px-5 pb-5">

                    <h2 className="text-2xl font-black text-slate-800 group-hover:text-[#2563eb] transition">
                        {name}
                    </h2>

                    {/* LOCATION */}
                    <p className="text-slate-500 mt-2 text-sm flex items-center gap-1">
                        📍 {location}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="text-slate-500 mt-3 text-sm leading-relaxed line-clamp-2">
                        {description}
                    </p>

                    {/* TIME */}
                    <div className="flex items-center justify-between mt-5 bg-blue-50 rounded-xl px-4 py-3">

                        <div>

                            <p className="text-[10px] text-slate-400 font-semibold">
                                OPEN
                            </p>

                            <h4 className="font-bold text-sm text-slate-700">
                                {open}
                            </h4>

                        </div>

                        <div className="w-6 h-[2px] bg-blue-200"></div>

                        <div className="text-right">

                            <p className="text-[10px] text-slate-400 font-semibold">
                                CLOSE
                            </p>

                            <h4 className="font-bold text-sm text-slate-700">
                                {close}
                            </h4>

                        </div>

                    </div>

                    {/* BUTTON */}
                    <Link href={`/facilities/${_id}`}>

                        <button className="w-full mt-5 bg-gradient-to-r from-[#2563eb] to-blue-500 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02]">
                            Book Now
                        </button>

                    </Link>

                </div>

            </div>

        </div>
    );
};

export default FacilitiesCard;
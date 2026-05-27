import Link from "next/link";

const Facilities = async () => {

  const res = await fetch("http://localhost:5000/destination", {
    cache: "no-store",
  });

  const facility = await res.json();

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8fbff] to-[#eef5ff]">

      <div className="w-11/12 mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">

          <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#2563eb] font-semibold text-sm">
            Featured Facilities
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mt-5">
            Explore Sports Arenas
          </h1>

          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Book premium football turfs, cricket grounds and indoor courts easily.
          </p>

        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            facility.slice(0, 6).map((item) => (

              <div
                key={item._id}
                className="group bg-white rounded-[28px] overflow-hidden border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >

                {/* IMAGE */}
                <div className="relative p-3">

                  {
                    item.image ? (

                      <img
                        src={item.image}
                        alt={item.name}
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
                    {item.sport}
                  </div>

                  {/* PRICE */}
                  <div className="absolute bottom-6 right-6 bg-[#2563eb] text-white px-4 py-2 rounded-xl shadow-lg">

                    <h3 className="font-black text-lg">
                      ₹{item.price}
                    </h3>

                    <p className="text-[10px] opacity-90">
                      per hour
                    </p>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="px-5 pb-5">

                  <h2 className="text-2xl font-black text-slate-800 group-hover:text-[#2563eb] transition">
                    {item.name}
                  </h2>

                  {/* LOCATION */}
                  <p className="text-slate-500 mt-2 text-sm flex items-center gap-1">
                    📍 {item.location}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-slate-500 mt-3 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* TIME */}
                  <div className="flex items-center justify-between mt-5 bg-blue-50 rounded-xl px-4 py-3">

                    <div>

                      <p className="text-[10px] text-slate-400 font-semibold">
                        OPEN
                      </p>

                      <h4 className="font-bold text-sm text-slate-700">
                        {item.open}
                      </h4>

                    </div>

                    <div className="w-6 h-[2px] bg-blue-200"></div>

                    <div className="text-right">

                      <p className="text-[10px] text-slate-400 font-semibold">
                        CLOSE
                      </p>

                      <h4 className="font-bold text-sm text-slate-700">
                        {item.close}
                      </h4>

                    </div>

                  </div>

                  {/* BUTTON */}
                  <Link href={`/facilities/${item._id}`}>

                    <button className="w-full mt-5 bg-gradient-to-r from-[#2563eb] to-blue-500 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02]">
                      Book Now
                    </button>

                  </Link>

                </div>

              </div>
            ))
          }

        </div>

      </div>

    </section>
  );
};

export default Facilities;
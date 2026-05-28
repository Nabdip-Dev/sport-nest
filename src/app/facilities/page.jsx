import FacilitiesCard from "@/components/FacilitiesCard";

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
            facility.map((facility)=> (<FacilitiesCard key={facility._id} facility={facility}/>))
          }

        </div>

      </div>

    </section>
  );
};

export default Facilities;
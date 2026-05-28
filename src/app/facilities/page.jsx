
import FacilitiesCard from "@/components/FacilitiesCard";
import { Search } from "lucide-react";

const Facilities = async () => {
  const res = await fetch("http://localhost:5000/destination", {
    cache: "no-store",
  });

  const facility = await res.json();

  return (
    <section className="pb-16">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 mt-5 leading-tight">
            Explore Sports Arenas
          </h1>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg">
            Book premium football turfs, cricket grounds and indoor courts
            with an easy and seamless experience.
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="shadow-lg rounded-2xl p-3 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">

            {/* CATEGORY */}
            <div className="relative group">

              {/* Glow */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-sky-200 via-blue-100 to-cyan-200 opacity-70 blur-sm group-focus-within:opacity-100 transition duration-300"></div>

              <select
                defaultValue=""
                className="
          relative
          w-full
          h-11
          rounded-xl
          border border-white/60
          bg-white/80
          backdrop-blur-xl
          px-4
          text-sm
          text-slate-700
          shadow-[0_6px_20px_rgba(0,0,0,0.05)]
          transition-all
          duration-300
          focus:outline-none
          focus:ring-2
          focus:ring-sky-100
          focus:border-sky-300
          hover:shadow-[0_8px_25px_rgba(59,130,246,0.10)]
          appearance-none
          cursor-pointer
        "
              >
                <option value="" disabled hidden>
                  Category
                </option>

                <option value="football">Football</option>
                <option value="cricket">Cricket</option>
                <option value="badminton">Badminton</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
              </select>

              {/* Arrow */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3.5 h-3.5 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* PRICE */}
            <div className="relative group">

              {/* Glow */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-sky-200 via-blue-100 to-cyan-200 opacity-70 blur-sm group-focus-within:opacity-100 transition duration-300"></div>

              <select
                className="
          relative
          w-full
          h-11
          rounded-xl
          border border-white/60
          bg-white/80
          backdrop-blur-xl
          px-4
          text-sm
          text-slate-700
          shadow-[0_6px_20px_rgba(0,0,0,0.05)]
          transition-all
          duration-300
          focus:outline-none
          focus:ring-2
          focus:ring-sky-100
          focus:border-sky-300
          hover:shadow-[0_8px_25px_rgba(59,130,246,0.10)]
          appearance-none
          cursor-pointer
        "
              >
                <option value="" disabled hidden>Sort By Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
                <option>Medium</option>
              </select>

              {/* Arrow */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-3.5 h-3.5 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* SEARCH */}
            <div className="md:col-span-2">
              <div className="relative group">

                {/* Glow */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-sky-200 via-blue-100 to-cyan-200 opacity-70 blur-sm group-focus-within:opacity-100 transition duration-300"></div>

                <input
                  type="search"
                  placeholder="Search by name or location..."
                  className="
            relative
            w-full
            h-11
            rounded-xl
            border border-white/60
            bg-white/80
            backdrop-blur-xl
            pl-11
            pr-4
            text-sm
            text-slate-700
            placeholder:text-slate-400
            shadow-[0_6px_20px_rgba(0,0,0,0.05)]
            transition-all
            duration-300
            focus:outline-none
            focus:ring-2
            focus:ring-sky-100
            focus:border-sky-300
            hover:shadow-[0_8px_25px_rgba(59,130,246,0.10)]
          "
                />

                <div
                  className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            flex
            items-center
            justify-center
            w-7
            h-7
            rounded-full
            bg-gradient-to-br
            from-sky-100
            to-blue-100
            shadow-sm
          "
                >
                  <Search className="text-sky-500" size={15} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facility.map((facility) => (
            <FacilitiesCard
              key={facility._id}
              facility={facility}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;


"use client";


import FacilitiesCard from "@/components/FacilitiesCard";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

const FacilitiesClient = ({ facilities }) => {
  const [category, setCategory] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 800ms loading animation

    return () => clearTimeout(timer);
  }, []);

  let data = [...facilities];

  // CATEGORY FILTER
  if (category) {
    data = data.filter(
      (item) =>
        item.sport?.toLowerCase() === category.toLowerCase()
    );
  }

  // SEARCH FILTER
  if (search) {
    data = data.filter(
      (item) =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.location?.toLowerCase().includes(search.toLowerCase())
    );
  }

  // PRICE SORT
  if (priceSort === "low") {
    data.sort((a, b) => a.price - b.price);
  }

  if (priceSort === "high") {
    data.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="pb-16">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* HEADER (SAME) */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-black text-slate-800 mt-3 leading-tight">
            Explore Sports Arenas
          </h1>

          <p className="text-slate-500 mt-2 max-w-2xl mx-auto text-[16px]">
            Book premium football turfs, cricket grounds and indoor courts
            with an easy and seamless experience.
          </p>
        </div>

        {/* FILTER BAR (100% SAME DESIGN) */}
        <div className="shadow-lg rounded-2xl p-3 -mt-5 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">

              {/* CATEGORY */}
              <div className="relative group">
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-sky-200 via-blue-100 to-cyan-200 opacity-70 blur-sm group-focus-within:opacity-100 transition duration-300"></div>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="relative w-full h-8 rounded-xl border border-white/60 bg-white/80 backdrop-blur-xl px-4 text-sm text-slate-700 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-300 hover:shadow-[0_8px_25px_rgba(59,130,246,0.10)] appearance-none cursor-pointer"
                >
                  <option value="">All Category</option>
                  <option value="football">Football</option>
                  <option value="cricket">Cricket</option>
                  <option value="badminton">Badminton</option>
                  <option value="basketball">Basketball</option>
                  <option value="tennis">Tennis</option>
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* PRICE */}
              <div className="relative group">
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-sky-200 via-blue-100 to-cyan-200 opacity-70 blur-sm group-focus-within:opacity-100 transition duration-300"></div>

                <select
                  value={priceSort}
                  onChange={(e) => setPriceSort(e.target.value)}
                  className="relative w-full h-8 rounded-xl border border-white/60 bg-white/80 backdrop-blur-xl px-4 text-sm text-slate-700 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-300 hover:shadow-[0_8px_25px_rgba(59,130,246,0.10)] appearance-none cursor-pointer"
                >
                  <option value="">Sort By Price</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

            </div>

            {/* SEARCH */}
            <div className="md:col-span-1">
              <div className="relative group">

                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-sky-200 via-blue-100 to-cyan-200 opacity-70 blur-sm group-focus-within:opacity-100 transition duration-300"></div>

                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name or location..."
                  className="relative w-full h-8 rounded-xl border border-white/60 bg-white/80 backdrop-blur-xl pl-11 pr-4 text-sm text-slate-700 placeholder:text-slate-400 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-300 hover:shadow-[0_8px_25px_rgba(59,130,246,0.10)]"
                />

                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 shadow-sm">
                  <Search className="text-sky-500" size={13} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CARDS */}
        {loading ? (
          <div className="">
            <div className="w-full h-[500px] flex items-center justify-center">
              <span className="loading loading-ring w-28 h-28 text-blue-600"></span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.map((facility) => (
              <FacilitiesCard
                key={facility._id}
                facility={facility}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FacilitiesClient;
import FacilitiesCard from "@/components/FacilitiesCard";


const FeaturedFacilities = ({ facilities = [] }) => {

  const featuredFacilities = facilities.slice(0, 6);


  return (
    <section className="py-16">

      <div className="w-11/12 max-w-7xl mx-auto">

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800">
            Featured Facilities
          </h2>

          <p className="text-slate-500 mt-2">
            Explore our premium sports facilities and book your favorite arena.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            featuredFacilities.map((facility) => (
              <FacilitiesCard
                key={facility._id}
                facility={facility}
              />
            ))
          }

        </div>

      </div>

    </section>
  );
};


export default FeaturedFacilities;
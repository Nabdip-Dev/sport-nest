import FacilitiesClient from "@/components/FacilitiesClient";


const Facilities = async () => {
  const res = await fetch("http://localhost:5000/destination", {
    cache: "no-store",
  });

  const facilities = await res.json();

  return <FacilitiesClient facilities={facilities} />;
};

export default Facilities;
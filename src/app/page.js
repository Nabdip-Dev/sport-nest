import Banner from "./home/Banner";
import WhyChoose from "./home/WhyChoose";
import SportsCategory from "./home/SportsCategory";
import FeaturedFacilities from "./home/FeaturedFacilities";


export default async function Home() {

  const res = await fetch("http://localhost:5000/destination", {
    cache: "no-store",
  });

  const facilities = await res.json();


  return (
    <>
      <Banner />

      <FeaturedFacilities 
        facilities={facilities}
      />

      <WhyChoose />

      <SportsCategory />
    </>
  );
}
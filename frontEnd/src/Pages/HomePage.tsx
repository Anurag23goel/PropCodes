import React from "react";
import Banner from "../Components/HomePage/Banner";
import Navbar from "../Components/HomePage/Navbar";
import PopularCity from "../Components/HomePage/PopularCity";
import PropertyCard from "../Components/HomePage/PropertyCard";
import Searchbar from "../Components/HomePage/Searchbar";
import Card2 from "../Components/HomePage/Card2";
import CarouselPopularProperties from "../Components/HomePage/CarouselPopularProperties";

const HomePage = () => {
  const cityList = ["Gurugram", "Delhi", "Bangalore", "Mumbai", "Pune"];

  const [isActive, setIsActive] = React.useState("");

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Banner and Search Bar Section */}
      <div className="w-full lg:relative mt-2">
        {/* Banner */}
        <div className="flex items-center">
          <Banner />
        </div>

        {/* Search Bar - Centered and Overlapping */}
        <div className="mt-4 flex items-center justify-center lg:mt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-[50px] lg:w-fit lg:max-w-fit z-10">
          <div className="flex items-center justify-center bg-gray-100 lg:border shadow-md rounded-lg pb-2 px-3">
            <Searchbar />
          </div>
        </div>
      </div>

      {/* Popular City Section */}
      <div className="w-full flex justify-center lg:mb-2 mt-6 lg:mt-20">
        <PopularCity />
      </div>

      {/* Featured Property Section */}
      <div className="lg:flex-nonetext-center lg:text-start mt-4 px-4 lg:px-8">
        <h1 className="text-3xl lg:text-[40px] lg:pl-5 pl-2 lg:mb-6 font-semibold">
          Featured Properties
        </h1>
        <div className="w-full flex flex-wrap items-center justify-center gap-6 lg:gap-10 mt-4">
          {[...Array(8)].map((_, index) => (
            <PropertyCard key={index} />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="my-6">
        <button className="px-6 py-2 text-md lg:text-xl rounded-full bg-blue-950 text-gray-100">
          View All
        </button>
      </div>

      {/* Explore Heavenly Properties */}
      <div className="flex flex-col justify-between w-full mt-6 px-5 mb-8 lg:mb-16">
        <h1 className="text-lg lg:text-[40px] lg:pl-5 pl-5 lg:mb-3 font-semibold">
          Explore Heavenly Homes
        </h1>

        {/* Cards Section */}
        <div className="flex flex-col justify-center lg:flex-row lg:justify-between gap-3 items-center p-3 lg:py-3 lg:px-20 border">
          {/* Vertical Card */}
          <div>
            <Card2 height="400px" width="300px" />
          </div>

          {/* Horizontal Cards */}
          <div className="flex flex-col gap-3 items-center justify-evenly">
            <Card2 height="190px" width="320px" />
            <Card2 height="190px" width="320px" />
          </div>

          {/* Vertical Card */}
          <div>
            <Card2 height="400px" width="270px" />
          </div>

          {/* Horizontal Cards */}
          <div className="flex flex-col gap-3 items-center justify-evenly">
            <Card2 height="190px" width="320px" />
            <Card2 height="190px" width="320px" />
          </div>
        </div>
      </div>

      {/* Popular Properties with Carousel Cards */}
      <div className="flex flex-col items-center lg:items-start justify-start w-full px-5 mb-8 lg:mb-8">
        <h1 className="text-lg lg:text-[40px] pl-5 font-semibold">
          Popular Properties
        </h1>
        <div className="flex flex-col py-3 px-10 w-full mt-5">
          <div className="flex items-center justify-center lg:justify-start lg:flex-row flex-wrap gap-3">
            {cityList.map((city, index) => (
              <button
                key={index}
                className={`${
                  isActive === city ? "bg-blue-950 text-white" : "bg-gray-200"
                } px-6 py-2 rounded-full text-lg lg:text-xl`}
                onClick={() => setIsActive(city)}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="w-full mx-auto mt-6">
            <CarouselPopularProperties />
          </div>
        </div>
      </div>

      {/* Banner For Ads */}
      <div className="w-11/12 h-[300px] bg-gray-300 flex items-center justify-center text-gray-500 text-5xl mb-8 font-semibold rounded-3xl">
        Advertisement
      </div>

      {/* Latest Properties */}
      <div className="flex flex-col items-center lg:items-start justify-start mt-2 w-full px-5 mb-8 lg:mb-8">
        <h1 className="text-lg lg:text-[40px] pl-5 font-semibold">
          Latest Properties
        </h1>
        <div className="w-full mx-auto mt-4 py-3 px-10">
          <CarouselPopularProperties />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

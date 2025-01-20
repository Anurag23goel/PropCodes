import React from "react";
import { FaBed, FaBath, FaWifi } from "react-icons/fa";
import exampleProp from "../../assets/exampleProp.jpeg";

const PropertyCard = () => {
  return (
    <div className="lg:max-w-[300px] w-full sm:w-[48%] rounded-2xl border border-gray-200 shadow-3xl">
      <div className="relative">
        <img
          src={exampleProp}
          alt="Property"
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 bg-green-600 text-white text-sm px-3 py-1 rounded">
          ₹ 75,000 / Night
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold mb-2">Corner Walk</h3>
          <span className="text-yellow-500 text-lg">★★★★★</span>
        </div>
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
          <div className="flex items-center gap-1">
            <FaBed className="text-blue-500" /> 3 Bed
          </div>
          <div className="flex items-center gap-1">
            <FaBath className="text-blue-500" /> 2 Bath
          </div>
          <div className="flex items-center gap-1">
            <FaWifi className="text-blue-500" /> Wifi
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
          diam stet diam sed stet lorem.
        </p>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            See Details
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

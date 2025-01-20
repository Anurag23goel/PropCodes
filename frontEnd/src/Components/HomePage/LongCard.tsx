import React from "react";
import longProp from "../../assets/towerBuilding.jpg";

const LongCard = () => {
  return (
    <div className="relative h-[405px] w-[229px] shadow-lg rounded-3xl overflow-hidden">
      {/* Background Image */}
      <img
        src={longProp}
        alt="popularProps"
        className="h-full w-full object-cover"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 text-white space-y-1">
        {/* Title */}
        <h3 className="text-lg font-semibold">M3M Line</h3>

        {/* Location */}
        <p className="text-sm">Sector 48, Gurugram</p>

        {/* Price Range */}
        <p className="text-sm font-medium">₹ 4 Cr* to ₹ 6 Cr*</p>

        {/* Type */}
        <p className="text-sm">Residential</p>

        {/* Area */}
        <p className="text-sm">450 Sq. Ft. to 1000 Sq. Ft.</p>
      </div>
    </div>
  );
};

export default LongCard;

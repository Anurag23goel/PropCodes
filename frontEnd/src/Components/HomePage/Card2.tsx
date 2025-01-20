import React from "react";
import propImage from "../../assets/waterProp.jpg";
import rightArrow from "../../assets/right-arrow.png";
// type Card2Props = {
//   height: string; // Accepts height for the card
//   width: string; // Accepts width for the card
// };

const Card2 = () => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:z-50 transition-transform"
      style={{
        height: "100%", // Default: Fit parent container (for small screens)
        width: "100%", // Default: Fit parent container (for small screens)
        maxHeight: "420px", // Restrict maximum height for larger screens
        maxWidth: "300px", // Restrict maximum width for larger screens
      }}
    >
      {/* Image */}
      <img
        src={propImage}
        alt="Property"
        className="h-full w-full object-cover"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>

      {/* Overlay with Text and Icon */}
      <div className="absolute bottom-4 left-4 flex justify-center items-center gap-2 text-white">
        <span className="text-lg font-medium">Gurgaon</span>
        <img src={rightArrow} alt="rightArrow" height={20} width={20} loading="lazy"/>
      </div>
    </div>
  );
};

export default Card2;

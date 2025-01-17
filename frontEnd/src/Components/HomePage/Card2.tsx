import React from "react";
import propImage from "../../assets/waterProp.jpg";
import rightArrow from "../../assets/right-arrow.png";
type Card2Props = {
  height: string; // Accepts height for the card
  width: string; // Accepts width for the card
};

const Card2: React.FC<Card2Props> = ({ height, width }) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:z-50 transition-transform"
      style={{ height, width }} // Apply height and width dynamically
    >
      {/* Image */}
      <img
        src={propImage}
        alt="Property"
        className="h-full w-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent"></div>

      {/* Overlay with Text and Icon */}
      <div className="absolute bottom-4 left-4 flex justify-center items-center gap-2 text-white">
        <span className="text-2xl font-medium">Gurgaon</span>
        <img src={rightArrow} alt="rightArrow" height={20} width={20}/>{" "}
      </div>
    </div>
  );
};

export default Card2;

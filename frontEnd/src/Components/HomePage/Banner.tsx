import React from "react";

const Banner = () => {
  return (
    <div
      className="w-11/12 mx-auto flex flex-col items-center justify-center pt-6 h-56 bg-gradient-to-b from-[#001B40] to-[#00426C] text-3xl text-white rounded-2xl shadow-lg
  lg:w-11/12 lg:mx-auto lg:flex lg:flex-row lg:justify-center lg:pt-6 lg:h-56 lg:bg-gradient-to-b lg:from-[#001B40] lg:to-[#00426C] lg:text-3xl lg:text-white lg:rounded-2xl lg:shadow-lg"
    >
      <h1 className="font-semibold text-center text-4xl mb-20">
        Your <span className="text-blue-500">Tag Line</span> Will Be Here
      </h1>
    </div>
  );
};

export default Banner;



// 001B40
// 00426C
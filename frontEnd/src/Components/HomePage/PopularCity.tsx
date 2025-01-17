import React from "react";

const PopularCity = () => {
  const cityList: string[] = [
    "Gurugram",
    "Delhi",
    "Bangalore",
    "Mumbai",
    "Pune",
  ];

  const [isActive, setIsActive] = React.useState("");

  return (
    <div className="flex flex-col gap-3  items-center lg:flex lg:flex-row lg:gap-4">
      <p className="text-lg lg:text-2xl">Popular Cities :</p>
      <div className="gap-4 flex lg:flex lg:flex-row lg:gap-4 max-w-screen flex-wrap justify-center">
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
    </div>
  );
};

export default PopularCity;

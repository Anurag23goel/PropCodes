import React, { useState } from "react";
import { LuBuilding2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

const Searchbar = () => {
  const [isSelected, setIsSelected] = useState("");
  const searchAreas = [
    "Gurugram",
    "Faridabad",
    "New Delhi",
    "Noida",
    "Greater Noida",
    "Ghaziabad",
  ];

  return (
    <div className="flex flex-col flex-wrap items-center justify-center py-2A gap-4 rounded-xl  lg:max-w-fit">
      {/* Rent, PG, Commercial Buttons */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-10 rounded-xl lg:max-w-fit ">
        {/* Rent, PG, Commercial Buttons */}
        <ul className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-10">
          {["Rent", "Sale", "PG", "Commercial", "Agents"].map((item) => {
            return (
              <li
                key={item}
                className="flex items-center justify-center text-black"
              >
                <div
                  className={`${
                    isSelected === item
                      ? "bg-blue-950 text-white px-2 rounded"
                      : ""
                  } flex justify-center items-center gap-1 py-2 px-2 sm:px-3 lg:px-4 rounded hover:cursor-pointer`}
                  onClick={() => setIsSelected(item)}
                >
                  <LuBuilding2 className="text-sm sm:text-base lg:text-lg" />
                  <span className="text-sm sm:text-base lg:text-lg">
                    {item}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Searchbar and Buttons */}
      <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-fit pb-1 flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4">
        {/* Dropdown, Input, and Microphone */}
        <div className="flex border border-gray-500 items-center rounded px-4 py-[5px] w-full sm:w-[90%] md:w-[80%] lg:w-auto">
          <select
            name="area"
            id="area"
            className="outline-none bg-transparent lg:pr-4 cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
          >
            {searchAreas.map((item) => (
              <option key={item} value={item.toLowerCase()}>
                {item}
              </option>
            ))}
          </select>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <CiSearch className="lg:text-gray-600" size={20} />
          <input
            type="text"
            name="search"
            id="search"
            className="flex-grow outline-none px-2 bg-transparent text-sm sm:text-base md:text-lg lg:text-xl lg:min-w-[500px]"
          />
          <FaMicrophone className="lg:text-gray-600" size={16} />
        </div>

        {/* Buttons */}
        <div className="flex items-center mt-4 lg:mt-0 justify-center gap-3">
          <button className="border border-gray-500 py-[6px] px-3 sm:px-4 text-sm sm:text-base md:text-lg rounded text-black hover:bg-gray-100">
            Budget
          </button>
          <button className="bg-black text-white px-3 sm:px-4 py-[6px] text-sm sm:text-base md:text-lg rounded hover:opacity-90">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

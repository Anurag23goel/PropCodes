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
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 pb-2 rounded-xl  lg:max-w-fit">
      {/* rent, pg, commercial buttons */}
      <div>
        <ul
          className="flex flex-nowrap items-center justify-center gap-4
        lg:flex lg:flex-row lg:gap-10"
        >
          {["Rent", "Sale", "PG", "Commercial", "Agents"].map((item) => {
            return (
              <li
                key={item}
                className=" flex items-center gap-1 text-black
                lg:flex lg:flex-col lg:items-center lg:gap-1 lg:text-black"
              >
                <div
                  className={`${
                    isSelected === item
                      ? "bg-blue-950 text-white px-1 rounded"
                      : ""
                  } flex justify-center items-center mt-3 gap-1 py-1 px-4 lg:flex lg:items-center rounded scale-110 hover:cursor-pointer`}
                  onClick={() => setIsSelected(item)}
                >
                  <LuBuilding2 />
                  <span onClick={() => setIsSelected(item)}>{item}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Seachbar and Buttons */}
      <div className="max-w-fit flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4">
        {/* dropdown and input and microphone */}
        <div className="flex border border-gray-500 items-center rounded px-4 py-[5px]">
          <select
            name="area"
            id="area"
            className="outline-none bg-transparent lg:pr-4 cursor-pointer text-base lg:text-xl"
          >
            {searchAreas.map((item) => (
              <option key={item} value={item.toLowerCase()}>
                {item}
              </option>
            ))}
          </select>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <CiSearch className="lg:text-gray-600" size={30} />
          <input
            type="text"
            name="search"
            id="search"
            className="flex-grow outline-none px-2 bg-transparent w-5/6 lg:min-w-[500px]"
          />
          <FaMicrophone className="lg:text-gray-600" size={16} />
        </div>

        {/* buttons */}
        <div className="flex items-center mt-4 lg:mt-0  justify-center gap-3">
          <button className=" border border-gray-500 py-[6px] px-5 text-lg rounded text-black hover:bg-gray-100">
            Budget
          </button>
          <button className="bg-black text-white px-5 py-[6px] text-lg rounded hover:opacity-90">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

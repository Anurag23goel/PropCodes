import React from "react";
import { FiUser } from "react-icons/fi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const SignupForm: React.FC = () => {
  const cities: string[] = ["Gurugram", "Delhi", "Bangalore", "Mumbai", "Pune"];

  return (
    <div className="min-w-fit max-h-full bg-white rounded-3xl shadow-lg py-4 px-6">
      {/* Header Section */}
      <h1 className="text-3xl font-semibold text-center mb:1 lg:mb-2">Sign Up</h1>
      <p className="text-gray-600 text-center mb-2 lg:mb-6">
        Welcome to Propcodes – Let’s create your account
      </p>

      {/* Form */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap- px-4">
        {/* Name */}
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="name" className="flex items-center gap-2">
            <FiUser className="text-xl " />
            <span className="text-md font-medium text-black">Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            placeholder="Enter Your Name"
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="mobileNumber" className="flex items-center gap-2">
            <IoCallOutline className="text-xl text-black" />
            <span className="text-md font-medium text-black">
              Mobile Number
            </span>
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            className="border border-gray-300 rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            placeholder="Enter Your Mobile Number"
          />
        </div>

        {/* Employee ID */}
        <div className="flex flex-col gap-2">
          <label htmlFor="employeeId" className="flex items-center gap-2">
            <MdOutlineEmail className="text-xl text-black" />
            <span className=" flex text-md font-medium text-black">
              Employee ID (Optional)
            </span>
          </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            className="border border-gray-300 rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            placeholder="Enter Your Employee ID"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col sm:col-span-2 gap-2">
          <label htmlFor="email" className="flex items-center gap-2">
            <MdOutlineEmail className="text-xl text-black" />
            <span className="text-md font-medium text-black">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            placeholder="Enter Your Email ID"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col sm:col-span-2 gap-2">
          <label htmlFor="password" className="flex items-center gap-2">
            <CiLock className="text-xl text-black" />
            <span className="text-md font-medium text-black">Password</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            placeholder="Enter Your Password"
          />
        </div>

        {/* Select Role */}
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="flex items-center gap-2">
            <FiUser className="text-xl text-black" />
            <span className="text-md font-medium text-black">
              Select your Role
            </span>
          </label>
          <input
            type="text"
            id="role"
            name="role"
            className="border border-gray-300 rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            placeholder="Enter Your Role"
          />
        </div>

        {/* Select City */}
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="flex items-center gap-2">
            <IoLocationOutline className="text-xl text-black" />
            <span className="text-md font-medium text-black">
              Select City
            </span>
          </label>
          <select
            id="city"
            name="city"
            className="border border-gray-300 rounded-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 gap-2 lg:mt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-md font-medium py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </div>

        {/* Footer */}
        <div className="sm:col-span-2 text-center">
          <p className="text-md text-gray-600 lg:mt-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 underline">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

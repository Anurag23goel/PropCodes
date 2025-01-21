import React from "react";
import { FiUser } from "react-icons/fi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const SignupForm: React.FC = () => {
  const cities: string[] = ["Gurugram", "Delhi", "Bangalore", "Mumbai", "Pune"];

  return (
    <div className="max-w-full bg-white rounded-3xl shadow-lg px-10 py-16 mx-auto border border-black lg:min-w-full">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
      <p className="text-gray-600 text-center mb-6 text-sm leading-tight">
        Welcome to Propcodes – Let’s create your account
      </p>

      {/* Form */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* Name */}
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label htmlFor="name" className="text-sm  text-gray-700">
            <FiUser className="inline-block mr-2 text-gray-500" />
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            placeholder="Enter Your Name"
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="mobileNumber"
            className="text-sm text-gray-700"
          >
            <IoCallOutline className="inline-block mr-2 text-gray-500" />
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            className="border border-gray-300 rounded-full px-2 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            placeholder="Enter Your Mobile Number"
          />
        </div>

        {/* Employee ID */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="employeeId"
            className="text-sm  text-gray-700"
          >
            <MdOutlineEmail className="inline-block mr-2 text-gray-500" />
            Employee ID (Optional)
          </label>
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            className="border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            placeholder="Enter Your Employee ID"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label htmlFor="email" className="text-sm  text-gray-700">
            <MdOutlineEmail className="inline-block mr-2 text-gray-500" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            placeholder="Enter Your Email ID"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label
            htmlFor="password"
            className="text-sm  text-gray-700"
          >
            <CiLock className="inline-block mr-2 text-gray-500" />
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            placeholder="Enter Your Password"
          />
        </div>

        {/* Select Role */}
        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="text-sm  text-gray-700">
            <FiUser className="inline-block mr-2 text-gray-500" />
            Select your Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            className="border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            placeholder="Enter Your Role"
          />
        </div>

        {/* Select City */}
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-sm  text-gray-700">
            <IoLocationOutline className="inline-block mr-2 text-gray-500" />
            Select City
          </label>
          <select
            id="city"
            name="city"
            className="border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-md  py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </div>

        {/* Footer */}
        <div className="sm:col-span-2 text-center mt-4">
          <p className="text-sm text-gray-600">
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

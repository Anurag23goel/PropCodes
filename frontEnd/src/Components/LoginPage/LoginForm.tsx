import React from "react";
import { MdOutlineEmail, MdLockOutline } from "react-icons/md";

const LoginForm: React.FC = () => {
  return (
    <div className="md:min-w-[425px] max-w-screen mx-auto bg-white rounded-3xl shadow-2xl py-8 px-10 border border-gray-200">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Sign In
      </h1>
      <p className="text-gray-500 text-center mb-8">
        PropCodes welcomes you back
      </p>

      {/* Form */}
      <form className="grid grid-cols-1 gap-6">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex items-center gap-2">
            <MdOutlineEmail className="text-2xl text-blue-600" />
            <span className="text-lg font-medium text-gray-800">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-full px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="flex items-center gap-2">
            <MdLockOutline className="text-2xl text-blue-600 font-bold" />
            <span className="text-lg font-medium text-gray-800">Password</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-full px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-lg font-semibold py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          >
            Login
          </button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-md text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-500 font-medium underline">
              Register Here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

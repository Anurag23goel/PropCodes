import React from "react";
import logo from "../../assets/logo.png";
import { FiUser } from "react-icons/fi";

const ContactUsForm: React.FC = () => {
  return (
    <div className="min-w-full min-h-full pt-8 pb-4 flex flex-col items-center justify-center">
      <img src={logo} alt="Logo" className="w-2/4 mb-6" />
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md p-4 items-center justify-center">
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label htmlFor="name" className="text-black">
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
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label htmlFor="mobileNumber" className="text-black">
            <FiUser className="inline-block mr-2 text-gray-500" />
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            className="border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label htmlFor="email" className="text-black">
            <FiUser className="inline-block mr-2 text-gray-500" />
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
            placeholder="Enter Email Address"
          />
        </div>
        <div className="flex flex-col gap-1 sm:col-span-2">
          <label htmlFor="message" className="text-black">
            <FiUser className="inline-block mr-2 text-gray-500" />
            Enter Your Message
          </label>
          <textarea
            name="message"
            id="message"
            className="border border-gray-300 rounded-2xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
          ></textarea>
        </div>
        <div className="flex items-center gap-2 sm:col-span-2">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="border border-gray-300"
          />
          <label htmlFor="terms" className="text-black">
            I agree to the{" "}
            <span className="underline text-blue-500">Terms of Use</span>
          </label>
        </div>
        <div className="sm:col-span-2">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;

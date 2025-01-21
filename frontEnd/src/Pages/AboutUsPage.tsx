import React from "react";
import Navbar from "../Components/HomePage/Navbar";
import ContactUsForm from "../Components/ContactUsPage/ContactUsForm";

const AboutUsPage: React.FC = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center overflow-x-hidden">
      <div className="w-full">
        <Navbar />
      </div>

      {/* Banner */}
      <div className="w-full bg-blue-950 hidden lg:flex flex-col items-center h-80 gap-6">
        <div className="w-full h-full flex flex-col items-center mt-14 gap-4">
          <h1 className="text-white text-2xl font-medium">CONTACT US</h1>
          <p className="text-white text-4xl">We'd love to talk to you</p>
        </div>
      </div>

      {/* INFO and FORM */}
      <div className="mt-10 gap-4 lg:gap-0 lg:w-2/3 h-fit rounded-xl flex flex-col lg:flex-row shadow-2xl lg:-translate-y-1/4 items-center lg:items-stretch">
        
        {/* COMPANY INFO */}
        <div className="bg-blue-50 border w-fit lg:w-1/2 rounded-xl lg:rounded-r-none lg:rounded-l-xl flex flex-col justify-center items-center py-4 gap-3 shadow-2xl">
          {/* TEXT */}
          <div className="flex flex-col gap-3 max-w-full text-center">
            <h1 className="text-4xl font-medium">Get in Touch</h1>
            <p className="text-lg">
              Our friendly team would love to hear from you
            </p>
          </div>

          {/* LOCATION, EMAIL, CALL AND SOCIAL ICONS */}
          <div className="flex flex-col px-6 lg:px-12 gap-6 mt-4">
            {/* LOCATION */}
            <div className="flex gap-4">
              <img src="" alt="" className="rounded-full" />
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl lg:text-3xl font-medium">Visit Us</h1>
                <p className="text-gray-500 text-sm lg:text-base">
                  Office no. 412, Vipul Business Park, Sector 48, Gurugram,
                  Haryana, 122001
                </p>
              </div>
            </div>
            {/* EMAIL US */}
            <div className="flex gap-4">
              <img src="" alt="" className="rounded-full" />
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl lg:text-3xl font-medium">Email Us</h1>
                <p className="text-gray-500 text-sm lg:text-base">
                  email@rmail.com
                </p>
              </div>
            </div>
            {/* CALL US */}
            <div className="flex gap-4">
              <img src="" alt="" className="rounded-full" />
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl lg:text-3xl font-medium">Call Us</h1>
                <p className="text-gray-500 text-sm lg:text-base">
                  +91 123456789
                </p>
              </div>
            </div>

            {/* Division Black Line */}
            <div className="w-full h-[1px] bg-black"></div>

            {/* SOCIAL MEDIA */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-medium">Follow Us</h1>
              <div className="flex gap-3 justify-center">
                <img src="" alt="whatsapp" className="rounded-full" />
                <img src="" alt="insta" className="rounded-full" />
                <img src="" alt="facebook" className="rounded-full" />
                <img src="" alt="youtube" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white w-fit md:w-2/3 lg:w-1/2 rounded-xl lg:rounded-l-none lg:rounded-r-xl shadow-2xl lg:shadow-none flex flex-col items-center justify-center py-4 gap-4">
          <ContactUsForm />
        </div>


      </div>
    </div>
  );
};

export default AboutUsPage;

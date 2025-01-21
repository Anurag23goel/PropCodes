import React from "react";
import bgIMG from "../assets/Circle.png";
import SignupForm from "../Components/SignUpPage/SignupForm";

const SignUpPage: React.FC = () => {
  return (
    <div className="px-4 lg:px-0 py-0 min-h-screen w-screen flex items-center justify-center bg-[#81B5FF] relative overflow-hidden">
      {/* Background Image */}
      <img
        src={bgIMG}
        alt="Background"
        className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-[70%] lg:-translate-x-1/2 translate-y-2 h-full w-full max-w-4xl opacity-100"
      />

      {/* Sign-Up Form */}
      <div className="py-4 md:py-0 relative md:z-10 md:w-fit  md:translate-x-[30%] lg:translate-x-[270px] md:min-w-fit border border-black min-w-[500px]">
        {/* Signup Form */}
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;

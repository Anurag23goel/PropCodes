import React from "react";
import bgIMG from "../assets/Circle.png";
import SignupForm from "../Components/SignUpPage/SignupForm";

const SignUpPage: React.FC = () => {
  return (
    <div className="px-4 lg:px-0 py-0 min-h-screen w-screen flex items-center justify-center bg-blue-300 relative overflow-hidden">
      {/* Background Image */}
      <img
        src={bgIMG}
        alt="Background"
        className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-[70%] lg:-translate-x-1/2 translate-y-2 h-[100%]  w-[80%] max-w-4xl opacity-100"
      />

      {/* Sign-Up Form */}
      <div className="py-4 md:py-0 relative md:z-10 md:w-full  md:translate-x-[30%] lg:translate-x-[270px] md:max-w-fit">
        {/* Signup Form */}
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;

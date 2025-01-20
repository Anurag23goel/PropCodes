import React from 'react'
import bgIMG from "../assets/Circle.png";
import LoginForm from '../Components/LoginPage/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="p-4 md:p-0 min-h-screen w-screen flex items-center justify-center bg-blue-300 relative overflow-hidden">
    {/* Background Image */}
    <img
      src={bgIMG}
      alt="Background"
      className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-[50%] lg:-translate-x-1/2 translate-y-2 h-[100%]  w-[80%] max-w-4xl opacity-100"
    />

    {/* Sign-Up Form */}
    <div className="relative md:z-50 md:w-full  md:translate-x-[50%] lg:translate-x-[270px] md:max-w-fit">
      {/* Signup Form */}
      <LoginForm />
    </div>
  </div>
  )
}

export default LoginPage

import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

interface LogoAndMenuButtonProps {
  isSmallScreen: boolean;
}

const LogoAndMenuButton: React.FC<LogoAndMenuButtonProps> = ({
  isSmallScreen,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex justify-between items-center">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-10 w-auto" />

      {/* Menu Toggle for Small Screens */}
      {isSmallScreen &&
        (isMenuOpen ? (
          <IoMdClose
            className="text-3xl text-blue-500 cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <MdMenu
            className="text-3xl text-blue-500 cursor-pointer"
            onClick={toggleMenu}
          />
        ))}

      {/* Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
          <div className="flex flex-row-reverse justify-between items-center p-4 border-b">
            
            <IoMdClose
              className="text-2xl text-red-500 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="p-4 space-y-4">
            <li>
              <a
                href="/"
                className="block text-lg text-gray-700 hover:text-blue-500"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/buy"
                className="block text-lg text-gray-700 hover:text-blue-500"
                onClick={toggleMenu}
              >
                Buy
              </a>
            </li>
            <li>
              <a
                href="/sell"
                className="block text-lg text-gray-700 hover:text-blue-500"
                onClick={toggleMenu}
              >
                Sell
              </a>
            </li>
            <li>
              <a
                href="/rent"
                className="block text-lg text-gray-700 hover:text-blue-500"
                onClick={toggleMenu}
              >
                Rent
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default LogoAndMenuButton;

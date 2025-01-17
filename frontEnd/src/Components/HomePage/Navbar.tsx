import React, { useState, useEffect } from "react";
import LogoAndMenuButton from "../NavBar/Logo";
import NavigationLinks from "../NavBar/NavigationLinks";
import RegisterButton from "../NavBar/AuthButtons";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="lg:top-0 lg:sticky lg:z-50 lg:w-screen lg:max-w-screen shadow-md bg-gray-100 border-b-2">
      <div className="p-4 w-screen lg:w-11/12 mx-auto">
        <ul className="lg:flex lg:justify-between lg:items-center">
          {/* Always Render Logo */}
          <li>
            <LogoAndMenuButton isSmallScreen={isSmallScreen} />
          </li>

          {/* Conditionally Render NavigationLinks and RegisterButton */}
          {!isSmallScreen && (
            <>
              <li>
                <NavigationLinks />
              </li>
              <li>
                <RegisterButton />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

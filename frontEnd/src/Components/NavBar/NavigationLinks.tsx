import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// interface NavigationLinksProps {
//   isMenuOpen: boolean;
// }

const NavigationLinks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const matchRoute = (path: string) => location.pathname === path;

  const links: string[] = ["Home", "Buy", "Sell", "Rent"];

  return (
    <div>
      <div className="-mx-[260px]">
        {links.map((item) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          const isActive = matchRoute(path);

          return (
            <button
              key={item}
              onClick={() => navigate(path)}
              className={`px-6 py-1 rounded text-xl ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "bg-transparent text-black"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationLinks;

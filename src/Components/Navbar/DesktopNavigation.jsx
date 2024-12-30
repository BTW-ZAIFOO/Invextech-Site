import React from "react";
import { NavLink } from "react-router-dom";

const DesktopNavigation = () => {
  return (
    <ul className="hidden md:flex gap-8 lg:gap-7 text-black text-base lg:text-base font-semibold">
      <NavLink
        to="/Home"
        className={({ isActive }) =>
          isActive
            ? "text-sky-500 border-b-4 border-sky-400"
            : "hover:text-sky-500 hover:border-b-4 border-transparent hover:border-sky-400 transition-all duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/CompletedProjects"
        className={({ isActive }) =>
          isActive
            ? "text-sky-500 border-b-4 border-sky-400"
            : "hover:text-sky-500 hover:border-b-4 border-transparent hover:border-sky-400 transition-all duration-300"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/Services"
        className={({ isActive }) =>
          isActive
            ? "text-sky-500 border-b-4 border-sky-400"
            : "hover:text-sky-500 hover:border-b-4 border-transparent hover:border-sky-400 transition-all duration-300"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/Company"
        className={({ isActive }) =>
          isActive
            ? "text-sky-500 border-b-4 border-sky-400"
            : "hover:text-sky-500 hover:border-b-4 border-transparent hover:border-sky-400 transition-all duration-300"
        }
      >
        Company
      </NavLink>
    </ul>
  );
};

export default DesktopNavigation;
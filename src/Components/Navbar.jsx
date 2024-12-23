import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="w-full top-0 left-0 absolute z-50">
      <div className="h-20 flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-white backdrop-blur-md shadow-md">
        {/* Logo */}
        <img
          src={assets.logo_preview}
          alt="Logo"
          className="w-32 sm:w-48 rounded-md drop-shadow-[0_5px_10px_rgba(0,0,0,0.1)]"
        />

        {/* Desktop Navigation */}
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

        <NavLink
          to="/Career"
          className={
            ({ isActive }) =>
              `md:block bg-sky-500 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 
               ${isActive ? "bg-slate-900 text-white" : ""} 
                 text-sm md:text-base` // Add responsive text size here
          }
        >
          Register / Career
        </NavLink>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="Menu Icon"
          className="md:hidden w-6 drop-shadow-[2px_4px_8px_rgba(0,0,0,1)] cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 z-20 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close Menu"
          />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-5 px-4 text-base sm:text-lg font-medium">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 font-bold"
                : "px-4 py-2 rounded-full hover:bg-gray-200 transition"
            }
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/CompletedProjects"
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 font-bold"
                : "px-4 py-2 rounded-full hover:bg-gray-200 transition"
            }
            onClick={() => setShowMobileMenu(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 font-bold"
                : "px-4 py-2 rounded-full hover:bg-gray-200 transition"
            }
            onClick={() => setShowMobileMenu(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/company"
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 font-bold"
                : "px-4 py-2 rounded-full hover:bg-gray-200 transition"
            }
            onClick={() => setShowMobileMenu(false)}
          >
            Company
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

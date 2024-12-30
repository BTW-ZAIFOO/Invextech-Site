import React from "react";
import { NavLink } from "react-router-dom";
import assets from "../../assets/assets";

const MobileMenu = ({ showMobileMenu, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 z-20 ${
        showMobileMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-6 cursor-pointer">
        <img
          onClick={onClose}
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
          onClick={onClose}
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
          onClick={onClose}
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
          onClick={onClose}
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
          onClick={onClose}
        >
          Company
        </NavLink>
      </ul>
    </div>
  );
};

export default MobileMenu;
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const DesktopNavigation = () => {
  return (
    <ul className="hidden md:flex gap-8 lg:gap-7 text-black text-base lg:text-base font-semibold">
      {[
        { path: "/Home", label: "Home" },
        { path: "/CompletedProjects", label: "Projects" },
        { path: "/Services", label: "Services" },
        { path: "/Company", label: "Company" },
      ].map((link) => (
        <motion.li
          key={link.path}
          whileHover={{
            scale: 1.2, // Slightly enlarge on hover
            color: "#0ea5e9", // Sky blue on hover
            borderBottomColor: "#0ea5e9", // Sky blue underline
          }}
          whileTap={{
            scale: 1, // Shrink on press
          }}
          transition={{
            duration: 0.4, // Smooth transition duration
            ease: "easeInOut",
          }}
          className="border-b-4 border-transparent"
        >
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-sky-500 border-sky-400"
                : "hover:text-sky-500 hover:border-sky-400 transition-all duration-300"
            }
          >
            {link.label}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
};

export default DesktopNavigation;

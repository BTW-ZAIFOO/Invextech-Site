import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarLogo from "./NavbarLogo";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileMenu from "./MobileMenu";

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
        <NavbarLogo />
        <DesktopNavigation />
        <NavLink
          to="/Career"
          className={({ isActive }) =>
            `md:block bg-sky-500 text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 
             ${isActive ? "bg-slate-900 text-white" : ""} 
               text-sm md:text-base`
          }
        >
          Register / Career
        </NavLink>
        <MobileMenuIcon onClick={() => setShowMobileMenu(true)} />
      </div>
      <MobileMenu showMobileMenu={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </div>
  );
};

export default Navbar;
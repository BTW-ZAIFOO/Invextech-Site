import React from "react";
import { NavLink } from "react-router-dom";
import assets from "../../assets/assets";

const NavbarLogo = () => {
  return (
    <NavLink to="/Home" className="flex items-center">
      <img
        src={assets.logo_preview}
        alt="Logo"
        className="w-32 sm:w-48 rounded-md drop-shadow-[0_5px_10px_rgba(0,0,0,0.1)]"
      />
    </NavLink>
  );
};

export default NavbarLogo;
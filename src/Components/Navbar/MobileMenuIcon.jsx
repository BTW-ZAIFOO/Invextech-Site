import React from "react";
import assets from "../../assets/assets";

const MobileMenuIcon = ({ onClick }) => {
  return (
    <img
      onClick={onClick}
      src={assets.menu_icon}
      alt="Menu Icon"
      className="md:hidden w-6 drop-shadow-[2px_4px_8px_rgba(0,0,0,1)] cursor-pointer"
    />
  );
};

export default MobileMenuIcon;
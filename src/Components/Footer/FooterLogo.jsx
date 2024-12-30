import React from "react";
import assets from "../../assets/assets";

const FooterLogo = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <img
        src={assets.logo_preview}
        alt="Company Logo"
        className="object-center w-72 bg-white rounded-lg shadow-lg p-1 m-4"
      />
    </div>
  );
};

export default FooterLogo;
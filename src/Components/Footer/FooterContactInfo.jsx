import React from "react";

const FooterContactInfo = () => {
  return (
    <div className="w-full">
      <h6 className="text-lg font-bold text-blue-gray-300 text-center">Contact Info</h6>
      <div className="m-3 w-full">
        {/* Address */}
        <p className="text-base text-blue-gray-300 m-3 text-center">
          Dolphin Mall, Commercial Market, Mohammad Ali Jinnah Road,
          Meher Colony, Okara, Punjab
        </p>
        {/* Phone */}
        <p className="text-base text-blue-gray-300 m-3 text-center">
          Phone: <br /> 0315-6429089
        </p>
      </div>
    </div>
  );
};

export default FooterContactInfo;
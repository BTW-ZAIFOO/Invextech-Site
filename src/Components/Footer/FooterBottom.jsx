import React from "react";

const currentYear = new Date().getFullYear();

const FooterBottom = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center border-t border-gray-700 py-4 md:flex-row md:justify-between">
      {/* Copyright Notice */}
      <p className="mb-4 text-center font-normal text-blue-gray-300 md:mb-0">
        &copy; {currentYear}{" "}
        <a href="https://www.linkedin.com/company/invextech" className="hover:underline">
          Invextech
        </a>
        . All Rights Reserved.
      </p>
      {/* Contact Email */}
      <p className="text-base text-blue-gray-300 m-3">
        Email: info@invextech.com
      </p>
      {/* Social Media Icons */}
      <div className="flex gap-4 text-blue-gray-300 sm:justify-center">
        <a
          href="https://www.facebook.com/invextech/"
          className="opacity-80 transition-opacity hover:opacity-100"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-facebook text-blue-700 text-3xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/invextech"
          className="opacity-80 transition-opacity hover:opacity-100"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-linkedin text-sky-600 text-3xl"></i>
        </a>
        <a
          href="https://wa.me/+923156429089"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 transition-opacity hover:opacity-100">
          <i className="fab fa-whatsapp text-green-500 text-3xl"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
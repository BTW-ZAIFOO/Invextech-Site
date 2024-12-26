import React from "react";
import assets from "../assets/assets";

// Define sitemap structure for navigation sections
const SITEMAP = [
  {
    title: "Company",
    links: ["Projects", "Services", "Company", "Careers"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Affiliate Program"],
  },
];

// Get the current year for the copyright section
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <>
      <footer className="w-full bg-slate-900 text-white sm:text-center">
        <div className="max-w-[1120px] mx-auto w-full mt-16 px-8">
          <div className="mx-auto grid w-full gap-9 py-12 sm:grid-cols-1 lg:grid-cols-4 text-center">
            {/* Left section: Company logo */}
            <div className="w-full flex justify-center items-center">
              <img
                src={assets.logo_preview}
                alt="Company Logo"
                className="object-center w-72 bg-white rounded-lg shadow-lg p-1 m-4"
              />
            </div>

            {/* Contact Info Section */}
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

            {/* Sitemap Sections */}
            {SITEMAP.map(({ title, links }, key) => (
              <div key={key} className="w-full">
                {/* Section Title */}
                <h6 className="mb-4 font-bold uppercase text-blue-gray-300 opacity-80">
                  {title}
                </h6>
                {/* Links */}
                <ul className="space-y-1">
                  {links.map((link, index) => (
                    <li key={index} className="font-normal">
                      <a
                        href="#"
                        className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-blue-gray-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
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
              >
                <i className="fab fa-facebook text-blue-700 text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/invextech"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <i className="fab fa-linkedin text-sky-600 text-2xl"></i>
              </a>
              <a
                href="https://wa.me/+923156429089"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <i className="fab fa-whatsapp text-green-500 text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

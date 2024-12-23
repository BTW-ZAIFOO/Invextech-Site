import React from "react";
import assets from "../assets/assets";

const SITEMAP = [
  {
    title: "Company",
    links: ["Projects", "Services", "Company", "Careers"],
  },
  {
    title: "Help Center",
    links: ["Facebook", "Linkedin", "Whatsapp"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Affiliate Program"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <>
      <footer className="w-full bg-slate-900 text-white sm:text-center">
        <div className="max-w-[1120px] mx-auto w-full mt-16 px-8">
          <div className="mx-auto grid w-full gap-9 py-12 sm:grid-cols-1 text-center align-top lg:grid-cols-5 sm:text-center">
            {/* Left section with logo */}
            <div className="w-full flex justify-center items-center">
              <img
                src={assets.logo_invextech}
                alt="Company Logo"
                className="m-4 mx-auto object-center bg-white p-3"
              />
            </div>

            {/* Contact Info Section */}
            <div className="w-full">
              <h6 className="text-lg font-bold text-blue-gray-300">
                Contact Info
              </h6>
              <div className="m-3 w-full">
                <p className="text-base text-blue-gray-300 m-3 text-left">
                  Dolphin Mall, Commercial Market, Mohammad Ali Jinnah Road,
                  Meher Colony, Okara, Punjab
                </p>

                <p className="text-base text-blue-gray-300 m-3 text-left">
                  Phone: <br /> 0315-6429089
                </p>
              </div>
            </div>

            {/* Existing Sitemap Sections */}
            {SITEMAP.map(({ title, links }, key) => (
              <div key={key} className="w-full">
                <h6 className="mb-4 font-bold uppercase text-blue-gray-300 opacity-80">
                  {title}
                </h6>
                <ul className="space-y-1">
                  {links.map((Facebook, key) => (
                    <li key={key} className="font-normal">
                      <a
                        href="https://www.facebook.com/invextech/"
                        className="inline-block py-1 pr-2 transition-transform hover:scale-105 text-blue-gray-300"
                      >
                        {Facebook}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-center border-t border-gray-700 py-4 md:flex-row md:justify-between">
            <p className="mb-4 text-center font-normal text-blue-gray-300 md:mb-0">
              &copy; {currentYear}{" "}
              <a href="https://material-tailwind.com/">Invextech</a>. All Rights
              Reserved.
            </p>
            <p className="text-base text-blue-gray-300 m-3">
              Email: info@invextech.com
            </p>
            <div className="flex gap-4 text-blue-gray-300 sm:justify-center">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com/invextech/"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <i className="fab fa-facebook text-blue-700 text-2xl"></i>{" "}
              </a>
              <a
                href="https://www.linkedin.com/company/invextech"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <i className="fab fa-linkedin text-sky-600 text-2xl"></i>{" "}
              </a>
              
              <a
                href="https://wa.me/+923156429089"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <i className="fab fa-whatsapp text-green-500 text-2xl"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

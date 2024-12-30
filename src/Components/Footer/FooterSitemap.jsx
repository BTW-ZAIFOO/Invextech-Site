import React from "react";

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

const FooterSitemap = () => {
  return (
    <>
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
    </>
  );
};

export default FooterSitemap;
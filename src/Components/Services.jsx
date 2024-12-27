import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import assets from "../assets/assets";

function Services() {
  const [detailsVisible, setDetailsVisible] = useState({
    ecommerce: false,
    mobileApp: false,
    webDevelopment: false,
    wordpress: false,
    blockchain: false,
    seo: false,
  });

  const toggleDetails = (service) => {
    setDetailsVisible((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

  return (
    <>
      {/* Header Section */}
      <div className="max-w-[1120px] mx-auto mt-16 py-10">
        <div className="text-center items-center">
          <h2 className="text-center text-3xl md:text-4xl font-extralight text-black mb-6">
            <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
              SERVICES WE PROVIDE
            </span>
          </h2>
          <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 text-3xl md:text-2xl">
            Custom Software Development
          </h3>
        </div>
      </div>

      {/* E-Commerce Service */}
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between mt-8 px-4">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={assets.images_1}
            alt="E-Commerce"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 px-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg sm:text-2xl text-left">
              E-Commerce Development
            </h2>
            <button
              onClick={() => toggleDetails("ecommerce")}
              className="border-2 border-gray-400 p-2"
            >
              <FontAwesomeIcon
                icon={detailsVisible.ecommerce ? faMinus : faPlus}
                className="w-6 h-6"
              />
            </button>
          </div>
          <p className="text-justify text-base pt-5 md:text-justify">
            Additional details about E-Commerce Development...
          </p>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              detailsVisible.ecommerce ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-justify text-base pt-5 md:text-justify">
              We create reliable and scalable e-commerce websites to help
              businesses sell their products to customers all over the world.
              Our platforms make it easy to manage product listings, process
              payments securely, and provide a smooth shopping experience for
              users. We focus on making transactions simple and efficient,
              ensuring that your customers enjoy shopping, which leads to better
              sales and higher profits.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile App Development Service */}
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between mt-4 px-4 ">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={assets.images_2}
            alt="App Development"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 px-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg sm:text-2xl text-left">
              Mobile App Development
            </h2>
            <button
              onClick={() => toggleDetails("mobileApp")}
              className="border-2 border-gray-400 p-2"
            >
              <FontAwesomeIcon
                icon={detailsVisible.mobileApp ? faMinus : faPlus}
                className="w-6 h-6"
              />
            </button>
          </div>
          <p className="text-justify pt-5 text-base md:text-justify">
            Additional details about Mobile App Development...
          </p>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              detailsVisible.mobileApp ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-justify text-base pt-5 md:text-justify">
              We specialize in developing mobile apps for both iOS and Android
              devices. Our team collaborates with you to design and build apps
              that are easy to use, visually appealing, and tailored to your
              business goals. Whether it's improving customer engagement or
              meeting specific business requirements, we create innovative
              solutions to help your app stand out and succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Web Development Service */}
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between mt-4 px-4">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={assets.images_3}
            alt="Web Development"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 px-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg sm:text-2xl text-left">
              Web Development
            </h2>
            <button
              onClick={() => toggleDetails("webDevelopment")}
              className="border-2 border-gray-400 p-2"
            >
              <FontAwesomeIcon
                icon={detailsVisible.webDevelopment ? faMinus : faPlus}
                className="w-6 h-6"
              />
            </button>
          </div>
          <p className="text-justify pt-5 text-base md:text-justify">
            Additional details about Web Development...
          </p>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              detailsVisible.webDevelopment ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-justify text-base pt-5 md:text-justify">
              We create high-performance websites designed to meet your business
              goals. Our expertise includes responsive designs that work
              perfectly on any device, SEO strategies to improve your online
              visibility, and smooth integration of all necessary features. We
              focus on building websites that attract visitors, keep them
              engaged, and turn them into loyal customers.
            </p>
          </div>
        </div>
      </div>

      {/* WordPress Solutions */}
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between mt-4 px-4">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={assets.images_4}
            alt="Cloud Services"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 px-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg sm:text-2xl text-left">
              WordPress Solutions
            </h2>
            <button
              onClick={() => toggleDetails("wordpress")}
              className="border-2 border-gray-400 p-2"
            >
              <FontAwesomeIcon
                icon={detailsVisible.wordpress ? faMinus : faPlus}
                className="w-6 h-6"
              />
            </button>
          </div>
          <p className="text-justify pt-5 text-base md:text-justify">
            Additional details about WordPress Solutions...
          </p>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              detailsVisible.wordpress ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-justify text-base pt-5 md:text-justify">
              Unlock the potential of the cloud with our reliable and scalable
              solutions. Whether you need cloud storage, powerful computing
              resources, or app hosting, we ensure your systems are optimized
              for top performance, high availability, and cost efficiency. Our
              team helps you take full advantage of the cloud to support your
              business growth and operational needs.
            </p>
          </div>
        </div>
      </div>

      {/* Blockchain Services */}
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between mt-4 px-4">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={assets.images_5}
            alt="Blockchain Development"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 px-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg sm:text-2xl text-left">
              Blockchain Development
            </h2>
            <button
              onClick={() => toggleDetails("blockchain")}
              className="border-2 border-gray-400 p-2"
            >
              <FontAwesomeIcon
                icon={detailsVisible.blockchain ? faMinus : faPlus}
                className="w-6 h-6"
              />
            </button>
          </div>
          <p className="text-justify text-base pt-5 md:text-justify">
            Additional details about Blockchain Development...
          </p>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              detailsVisible.blockchain ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-justify text-base pt-5 md:text-justify">
              Expand your business with advanced blockchain technology. We
              provide customized blockchain solutions that improve transparency,
              strengthen security, and boost efficiency. From creating smart
              contracts to building decentralized applications (dApps), we help
              you harness the full potential of blockchain to meet your unique
              business needs.
            </p>
          </div>
        </div>
      </div>

      {/* SEO Services */}
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between mt-4 px-4">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={assets.development_img}
            alt="SEO Solutions"
            className="rounded-lg shadow-md w-full p-2 h-auto bg-white"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 px-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg sm:text-2xl text-left">
              SEO Solutions
            </h2>
            <button
              onClick={() => toggleDetails("seo")}
              className="border-2 border-gray-400 p-2"
            >
              <FontAwesomeIcon
                icon={detailsVisible.seo ? faMinus : faPlus}
                className="w-6 h-6"
              />
            </button>
          </div>
          <p className="text-justify text-base pt-5 md:text-justify">
            Additional details about SEO Solutions...
          </p>
          <div
            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
              detailsVisible.seo ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-justify text-base pt-5 md:text-justify">
              Boost your online presence with our customized SEO strategies. We
              handle everything from keyword research to on-page optimization,
              ensuring your website ranks higher on search engines. Our approach
              drives organic traffic to your site, enhances user engagement, and
              increases conversion rates, helping your business grow
              effectively.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
import React from "react";
import assets from "../assets/assets";

function Services() {
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
          <h2 className="font-bold text-lg sm:text-2xl text-left">
            E-Commerce Development
          </h2>
          <p className="text-justify text-base pt-5 md:text-justify">
            We create reliable and scalable e-commerce websites to help
            businesses sell their products to customers all over the world. Our
            platforms make it easy to manage product listings, process payments
            securely, and provide a smooth shopping experience for users. We
            focus on making transactions simple and efficient, ensuring that
            your customers enjoy shopping, which leads to better sales and
            higher profits.
          </p>
        </div>
      </div>

      {/* Mobile App Development Service */}
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between mt-4 px-4">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={assets.images_2}
            alt="App Development"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 px-4">
          <h2 className="font-bold text-lg sm:text-2xl text-left">
            Mobile App Development
          </h2>
          <p className="text-justify pt-5 text-base md:text-justify">
            We specialize in developing mobile apps for both iOS and Android
            devices. Our team collaborates with you to design and build apps
            that are easy to use, visually appealing, and tailored to your
            business goals. Whether it's improving customer engagement or
            meeting specific business requirements, we create innovative
            solutions to help your app stand out and succeed.
          </p>
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
          <h2 className="font-bold text-lg sm:text-2xl text-left">
            Web Development
          </h2>
          <p className="text-justify pt-5 text-base md:text-justify">
            We create high-performance websites designed to meet your business
            goals. Our expertise includes responsive designs that work perfectly
            on any device, SEO strategies to improve your online visibility, and
            smooth integration of all necessary features. We focus on building
            websites that attract visitors, keep them engaged, and turn them
            into loyal customers.
          </p>
        </div>
      </div>

      {/* WordPress Solutions */}
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between mt-4 px-4">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={assets.images_4}
            alt="WordPress Solutions"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 px-4">
          <h2 className="font-bold text-lg sm:text-2xl text-left">
            WordPress Solutions
          </h2>
          <p className="text-justify pt-5 text-base md:text-justify">
            Unlock the potential of WordPress with our reliable and scalable
            solutions. Whether you need tailored themes, powerful plugins, or app
            hosting, we ensure your site is optimized for top performance, high
            availability, and cost efficiency.
          </p>
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
          <h2 className="font-bold text-lg sm:text-2xl text-left">
            Blockchain Development
          </h2>
          <p className="text-justify text-base pt-5 md:text-justify">
            Expand your business with advanced blockchain technology. We provide
            customized blockchain solutions that improve transparency,
            strengthen security, and boost efficiency.
          </p>
        </div>
      </div>

      {/* SEO Services */}
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row-reverse items-center justify-between mt-4 px-4">
        <div className="w-full md:w-1/3 p-4">
          <img
            src={assets.development_img}
            alt="SEO Solutions"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 px-4">
          <h2 className="font-bold text-lg sm:text-2xl text-left">
            SEO Solutions
          </h2>
          <p className="text-justify text-base pt-5 md:text-justify">
            Boost your online presence with our customized SEO strategies. We
            handle everything from keyword research to on-page optimization,
            ensuring your website ranks higher on search engines.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;

import React from "react";

const ServiceItem = ({ image, altText, title, description, reverse }) => {
  return (
    <div className={`max-w-[1120px] mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between mt-4 px-4`}>
      <div className="w-full md:w-1/3 p-4">
        <img
          src={image}
          alt={altText}
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 text-gray-800 px-4">
        <h2 className="font-bold text-lg sm:text-2xl text-left">
          {title}
        </h2>
        <p className="text-justify pt-5 text-base md:text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceItem;
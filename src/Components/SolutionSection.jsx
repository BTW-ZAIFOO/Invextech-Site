import React from "react";
import { Link } from "react-router-dom";

const SolutionsSection = ({ solutions }) => {
  return (
    <div className="max-w-[1120px] mx-auto mt-16 py-10 sm:px-6 lg:px-8">
      <div id="solutions" className="text-center items-center mb-12">
        <h2 className="text-center text-3xl md:text-4xl font-extralight text-black mb-4">
          <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
            SOLUTIONS
          </span>
        </h2>
        <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 text-3xl md:text-3xl">
          End-to-End Expertise
        </h3>
        <p className="text-center text-base md:text-xl font-normal text-gray-800">
          We think big, design smart and develop fast for all screens,
          projects and teams. Serving global leaders to entrepreneurs, we
          tailor our process based on your scale and structure.
        </p>
      </div>

      {/* Centering the grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-9 text-center pb-8 mx-auto">
        {/* SOLUTIONS CARD */}
        {solutions.map((solution, index) => (
          <Link
            to={`/solutions/${solution.slug}`}
            key={index}
            className="flex flex-col items-center border-2 border-slate-300 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-sky-500 bg-white"
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-auto max-h-[150px] object-contain transition-all duration-300 transform hover:scale-110"
            />
            <h2 className="font-bold text-sm mt-4 text-center">
              {solution.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SolutionsSection;
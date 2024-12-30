import React from "react";
import assets from "../../assets/assets";

const ProjectsSection = ({ counters }) => {
  return (
    <div id="Projects" className="max-w-[1120px] mx-auto px-4 pb-10">
      <div className="p-5 my-6">
        <h2 className="text-center text-3xl md:text-4xl font-extralight text-black mb-6">
          <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
            OVERVIEW OF COMPANY
          </span>
        </h2>
        <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 text-3xl md:text-3xl">
          Status of Company
        </h3>
        <p className="text-center text-base md:text-xl font-normal text-gray-800">
          Map a strategy, build a solution or elevate your product experience
          with focused engagements available as standalone offerings or as a
          part of your project's service stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={assets.development_img}
            alt="Development"
            className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] max-w-full h-auto"
          />
        </div>

        {/* Stats Section */}
        <div className="flex flex-col justify-evenly space-y-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="text-left">
              <h3 className="font-medium text-lg sm:text-4xl">
                {Math.round(counters.years)}+
              </h3>
              <p className="font-light text-sm sm:text-lg">
                Years Of Completion
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-lg sm:text-4xl">
                {Math.round(counters.projects)}+
              </h3>
              <p className="font-light text-sm sm:text-lg">
                Projects Completed
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-lg sm:text-4xl">
                {Math.round(counters.remarks)}%
              </h3>
              <p className="font-light text-sm sm:text-lg">
                Clients Testimonials
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-medium text-lg sm:text-4xl">
                {Math.round(counters.pending)}+
              </h3>
              <p className="font-light text-sm sm:text-lg">
                Pending Projects
              </p>
            </div>
          </div>

          {/* Description Section */}
          <div className="text-justify">
            <p className="text-sm sm:text-base mb-2">
              We specialize in creating innovative digital products and
              strategies that empower startups, small businesses, and
              enterprises to tackle real business challenges. Our focus is on
              delivering practical solutions that drive measurable results,
              helping our clients succeed in a competitive market.
            </p>
            <p className="text-sm sm:text-base mb-2">
              By understanding each client's unique needs, we craft tailored
              strategies and user-friendly products that enhance efficiency,
              improve customer experiences, and support business growth.
              Whether it's developing a new app, improving a website, or
              building a digital strategy, we are committed to turning ideas
              into impactful solutions that create lasting value for our
              clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
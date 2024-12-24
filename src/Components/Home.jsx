import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const solutions = [
  { slug: "midsize", image: assets.download, title: "MIDSIZE" },
  { slug: "startup", image: assets.images, title: "STARTUP" },
  { slug: "enterprise", image: assets.images_1, title: "ENTERPRISE" },
];

const Home = () => {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    remarks: 0,
    pending: 0,
  });

  useEffect(() => {
    const targetValues = {
      years: 10,
      projects: 10,
      remarks: 95,
      pending: 15,
    };

    const duration = 3000;
    const frameRate = 16;
    const step = duration / frameRate;

    const increments = {
      years: targetValues.years / step,
      projects: targetValues.projects / step,
      remarks: targetValues.remarks / step,
      pending: targetValues.pending / step,
    };

    const animateCounters = () => {
      setCounters((prev) => {
        let updated = { ...prev };

        for (let key in increments) {
          if (prev[key] < targetValues[key]) {
            updated[key] = Math.min(
              prev[key] + increments[key],
              targetValues[key]
            );
          }
        }

        return updated;
      });
    };

    const interval = setInterval(animateCounters, frameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header Section */}
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative"
        style={{ backgroundImage: `url('../assets/header_img.jpeg')` }}
        id="Header"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-gray-900 opacity-80"></div>
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-gray-100 relative">
          <motion.h2
            className="text-4xl sm:text-4xl md:text-6xl inline-block max-w-3xl font-bold pt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            Empower your Business smartly with{" "}
            <span className="text-sky-400 border-b-4 border-sky-400">
              InvexTech
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl inline-block max-w-4xl font-medium pt-6 text-gray-100 leading-normal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            We craft innovative digital products and strategies, empowering
            startups, SMBs, and enterprises to solve real business challenges
            and achieve measurable results.
          </motion.p>

          <div className="mt-6 flex justify-center gap-3">
            <motion.a
              href="#Projects"
              className="border-4 border-sky-400 px-8 py-2 rounded-full font-semibold text-lg text-sky-400 hover:bg-sky-400 hover:text-white transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >
              Projects
            </motion.a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
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

      {/* Solutions Section */}
      <div className="max-w-[1120px] mx-auto mt-16 py-10 sm:px-6 lg:px-8">
        <div className="text-center items-center mb-12">
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

      {/* Portfolio Section */}
      <div className="max-w-[1120px] mx-auto mt-16 py-10 sm:px-6 lg:px-8">
        <div className="text-center items-center mb-12">
          <h2 className="text-center text-3xl md:text-4xl font-extralight text-black mb-4">
            <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
              PORTFOLIO
            </span>
          </h2>
          <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 text-3xl md:text-3xl">
            Multi-Vertical Mastery
          </h3>
          <p className="text-center text-base md:text-xl font-normal text-gray-800">
            Working confidently across diverse regulatory environments, we meet
            business needs with engaging experiences in digital health, finance,
            engineering, commerce, real estate, education and beyond.
          </p>
        </div>

        {/* Centering the grid */}
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 text-center pb-8 mx-auto">
          {/* PORTFOLIO CARD */}
          {[
            { image: assets.download },
            { image: assets.images },
            { image: assets.images_1 },
            { image: assets.development_img },
            { image: assets.images_4 },
            { image: assets.images_5 },
          ].map((portfolio, index) => (
            <div
              key={index}
              className="flex flex-col items-center border-2 border-slate-300 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-sky-500 bg-white"
            >
              <img
                src={portfolio.image}
                alt={`port-${index + 1}`}
                className="w-full h-auto max-h-[150px] object-contain transition-all duration-300 transform hover:scale-105"
              />
              <h2 className="font-bold text-sm mt-4 text-center">
                {portfolio.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
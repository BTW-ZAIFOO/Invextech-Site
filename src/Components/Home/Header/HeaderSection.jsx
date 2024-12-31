import React from "react";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative z-10"
      style={{
        backgroundImage: `url('https://ik.imagekit.io/HuzaifaKhan/header_img.jpeg?updatedAt=1735196106351')`,
      }}
      id="Header"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-gray-900 opacity-80"></div>
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-gray-100 relative">
        <motion.h2
          className="text-4xl sm:text-4xl md:text-6xl inline-block max-w-3xl font-bold pt-20 z-0"
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
  );
};

export default HeaderSection;
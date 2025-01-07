import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import Chatbot from "../ChatBot/Chatbot";

const projects = [
  { slug: "COOPER BUILD", image: assets.download, title: "COOPER BUILD" },
  { slug: "RESEARCH COLLAB", image: assets.images, title: "RESEARCH COLLAB" },
  { slug: "ZAPIER AUTOMATION", image: assets.images_1, title: "ZAPIER AUTOMATION" },
  { slug: "ONU", image: assets.images_2, title: "ONU" },
  { slug: "TELEGRAM BOT", image: assets.development_img, title: "TELEGRAM BOT" },
  { slug: "WHATSAPP BOT", image: assets.images_4, title: "WHATSAPP BOT" },
  { slug: "OZ SOLUTIONS", image: assets.images_5, title: "OZ SOLUTIONS" },
  { slug: "RANDOM", image: assets.download, title: "RANDOM" },
];

function CompletedProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    // Restore scroll position on component mount
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, savedPosition);
    }

    // Save scroll position when navigating away
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      sessionStorage.setItem("scrollPosition", window.scrollY); // Save scroll on component unmount
    };
  }, []);

  const handleProjectClick = (slug) => {
    // Save the current scroll position before navigating
    sessionStorage.setItem("scrollPosition", window.scrollY);
    navigate(`/projects/${slug}`);
  };

  return (
    <div className="max-w-[1120px] mx-auto mt-16 py-10 sm:px-6 lg:px-8">
      <div className="text-center items-center mb-12">
        <h2 className="text-center text-3xl md:text-4xl font-extralight text-black mb-4">
          <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
            COMPLETED PROJECTS
          </span>
        </h2>
        <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 text-3xl md:text-3xl">
          Featured Case Studies
        </h3>
        <p className="text-center text-base md:text-xl font-normal text-gray-800">
          Map a strategy, build a solution, or elevate your product experience
          with focused engagements available as standalone offerings or as a
          part of your project's service stack.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 text-center pb-8 mx-auto">
        {projects.map((project, index) => (
          <Link
            to={`/projects/${project.slug}`}
            key={index}
            className="flex flex-col items-center border-2 border-slate-300 p-10 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-sky-500 bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[150px] object-contain transition-all duration-300 transform hover:scale-110"
            />
            <h2 className="font-bold text-sm mt-4 text-center">{project.title}</h2>
          </Link>
        ))}
        <div>
        <Chatbot/>
        </div>
      </div>
    </div>
  );
}

export default CompletedProjects;
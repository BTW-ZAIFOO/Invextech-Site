import React, { useState } from "react";
import Modal from "./Modal";
import TeamSection from "./CompanyManagementSection";

const Company = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const team = [
    {
      name: "Mr. Abu-Bakar Waqas",
      role: "CEO",
      image: "https://ik.imagekit.io/HuzaifaKhan/Ceo_img.jpeg?updatedAt=1735196105527",
      bio: "A visionary leader driving innovation and growth at our company.",
      socials: {
        linkedin: "https://www.linkedin.com/in/abubakar-waqas-a25182199",
      },
    },
    {
      name: "Mr. Muhsan Sattar",
      role: "COO",
      image: "https://ik.imagekit.io/HuzaifaKhan/Coo_img.jpeg?updatedAt=1735196105613",
      bio: "An operational expert ensuring seamless execution of our strategies.",
      socials: {
        linkedin: "https://www.linkedin.com/in/muhsan-sattar-b7b0801a4",
      },
    },
    {
      name: "Rimsha Maryam",
      role: "HR",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGT_X83CRh2jFX9iojbv3ByMRcm4TDDAnIA&s",
      bio: "Passionate about building a positive and productive workplace culture.",
      socials: {
        linkedin: "https://www.linkedin.com/in/rimsha-maryam-0193b5208",
      },
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1120px] mx-auto mt-16 py-10">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl text-center font-bold mb-4">Message from the CEO</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our company! We are dedicated to driving innovation and growth. Our team is committed to delivering the best solutions to our clients. Thank you for visiting our website.
        </p>
        <p className="text-gray-700 font-bold text-center text-lg">
          Mr. Abu-Bakar Waqas, CEO
        </p>
      </Modal>
      <div>
        <h2 className="text-center text-2xl md:text-4xl font-extralight text-gray-800 mb-6">
          <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
            MANAGEMENT
          </span>
        </h2>
        <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 md:text-xl">
          Know Our Management
        </h3>
        <p className="text-center text-base md:text-xl font-normal text-gray-800 pb-7">
          Meet Our Best And Honoured Management.
        </p>
        <p className="text-center text-base md:text-xl font-normal text-gray-800 pb-7">
          We're a custom software development firm that works with startups,
          SMBs & enterprises to craft disruptive digital products & strategies
          that solve business problems & drive measurable results.
        </p>
        <p className="text-center text-base md:text-xl font-normal text-gray-800 pb-7">
          We nurture entrepreneurial spirit with corporate expertise & experience, best in class tools & frameworks, Agile methods & talent to create an ecosystem that enables both startups & established companies to innovate efficiently with us. We continue to provide strategic value in the days, weeks & years after the products launch. By offering insight & candid counsel at every stage of the engagement, we consider ourselves to be a partner and not just a vendor.
        </p>
      </div>
      <TeamSection team={team} />
    </div>
  );
};

export default Company;
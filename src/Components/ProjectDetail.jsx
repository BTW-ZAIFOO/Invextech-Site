import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const projects = [
  {
    slug: "COOPER BUILD",
    title: "COOPER BUILD",
    description: `
        Cooper Build is a modern building management system designed to make daily operations more efficient. It offers tools for scheduling, notifications, and task automation, making life easier for building managers.

        We developed the platform with user experience in mind, focusing on real-time updates and automated workflows that save time and boost productivity. By collaborating with industry experts, we ensured that Cooper Build meets all necessary standards while delivering a robust and reliable solution.

        Our goal was to create a system that simplifies the complex tasks of building management. With Cooper Build, managers can easily schedule tasks, receive notifications, and automate routine activities, allowing them to focus on more important aspects of their work. The result is a powerful tool that enhances efficiency and productivity in building management. 
    `,
  },
  {
    slug: "RESEARCH COLLAB",
    title: "RESEARCH COLLAB",
    description: `
    Research Collab is a platform that brings researchers from all over the world together, encouraging collaboration and innovation. It offers features like real-time communication, document sharing, and project management tools to make teamwork effortless.

    Our aim was to eliminate barriers and build a global community of researchers. This secure and user-friendly platform allows professionals from various fields to share ideas and work together more effectively.

    By providing a space for seamless collaboration, Research Collab empowers researchers to connect, communicate, and innovate, driving progress and discovery across the globe.
    `,
  },
  {
    slug: "ZAPIER AUTOMATION",
    title: "ZAPIER AUTOMATION",
    description: `
    Zapier Automation is designed to make your workflows more efficient by integrating with popular apps and services. It automates repetitive tasks, allowing you to focus on more important work.

    Our goal with this project was to create flexible and reliable tools that save users time. We conducted extensive testing and development to ensure smooth integrations and a user-friendly experience.

    With Zapier Automation, you can streamline your daily tasks and improve productivity. The system's seamless integration with various apps and services helps you automate workflows effortlessly, making your work life easier and more efficient.
    `,
  },
  {
    slug: "ONU",
    title: "ONU",
    description: `
    ONU is a mobile app designed to help users track their nutrition and fitness goals. With features like meal planning, workout tracking, and progress monitoring, ONU serves as a comprehensive health and fitness companion.

    We collaborated with nutritionists and fitness experts to develop a reliable app that provides personalized recommendations. This ensures that users receive tailored advice and support on their journey to better health.

    ONU makes it easy for users to stay on top of their health and fitness goals. Whether it's planning meals, tracking workouts, or monitoring progress, the app offers all the tools needed to make informed decisions and stay motivated.
    `,
  },
  {
    slug: "TELEGRAM BOT",
    title: "TELEGRAM BOT",
    description: `
    The Telegram Bot is a custom tool that automates tasks and delivers real-time updates. It integrates with popular services to simplify workflows and enhance productivity.

    Designed with reliability and ease of use in mind, the bot includes features like notifications and automated responses, making it a valuable tool for busy users.

    The Telegram Bot helps users stay on top of their tasks by providing timely updates and automating routine activities. Its seamless integration with various services ensures that users can manage their workflows efficiently and effectively.
    `,
  },
  {
    slug: "WHATSAPP BOT",
    title: "WHATSAPP BOT",
    description: `
    The WhatsApp Bot is an AI-powered solution for businesses looking to enhance customer engagement and automate support. It handles real-time notifications and responses, helping businesses stay connected with their customers.

    With a user-first approach, this project focused on creating a seamless experience for both businesses and their customers. The bot's features ensure that businesses can provide timely and efficient support, improving overall customer satisfaction.

    By automating routine tasks and providing instant responses, the WhatsApp Bot allows businesses to focus on more critical aspects of their operations. This powerful tool helps businesses stay connected with their customers and deliver exceptional service.
    `,
  },
  {
    slug: "OZ SOLUTIONS",
    title: "OZ SOLUTIONS",
    description: `
    OZ Solutions is an e-commerce platform designed for small and medium businesses. It provides tools for product listings, order management, and payment processing, making it easy to run an online store.

    Built with a focus on usability and productivity, OZ Solutions empowers businesses to grow and succeed in the digital world. The platform offers a seamless experience, allowing businesses to manage their online presence efficiently.

    With OZ Solutions, businesses can easily list products, manage orders, and process payments. This comprehensive tool helps businesses thrive in the competitive e-commerce landscape by providing all the necessary features to succeed.
    `,
  },
  {
    slug: "RANDOM",
    title: "RANDOM",
    description: `
    Random is an experimental project that explores innovative technologies to address real-world challenges. It serves as a playground for trying out cutting-edge ideas and developing creative solutions.

    This project helps our team stay ahead of trends and discover new opportunities in the tech landscape. By experimenting with new technologies, we can push the boundaries of what's possible and find novel ways to solve problems.

    Through Random, we aim to stay at the forefront of technological advancements and continuously innovate to meet the evolving needs of the world.
    `,
  },
];

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex(
    (proj) => proj.slug.toLowerCase() === slug.toLowerCase()
  );
  const project = projects[projectIndex];

  if (!project) {
    return <div className="text-center text-xl mt-16">Project not found.</div>;
  }

  const handleBack = () => {
    if (projectIndex > 0) {
      navigate(`/projects/${projects[projectIndex - 1].slug}`);
    }
  };

  const handleNext = () => {
    if (projectIndex < projects.length - 1) {
      navigate(`/projects/${projects[projectIndex + 1].slug}`);
    }
  };

  const handleClose = () => {
    navigate("/CompletedProjects");
  };

  return (
    <div className="max-w-[800px] mx-auto mt-16 py-10 px-6 relative">
      <button
        onClick={handleClose}
        className="absolute top-10 right-4 text-gray-500 hover:text-gray-800 text-4xl font-semibold"
        aria-label="Close"
      >
        ×
      </button>
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {project.description}
      </p>
      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className="px-7 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
          disabled={projectIndex === 0}
        >
          Back
        </button>
        {projectIndex < projects.length - 1 && (
          <button
            onClick={handleNext}
            className="px-7 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;

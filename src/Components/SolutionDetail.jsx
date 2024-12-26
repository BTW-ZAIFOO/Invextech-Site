import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const solutions = [
  {
    slug: "midsize",
    title: "MIDSIZE",
    description: `
    Midsize is a comprehensive solution designed to address the unique challenges faced by growing businesses. As companies scale, they often encounter complexities in managing operations, resources, and workflows. Midsize bridges the gap by providing tools that streamline processes and enhance productivity.

    Our platform offers features such as team collaboration tools, resource management, and real-time analytics, helping midsize companies stay organized and make informed decisions. With a focus on user-friendly design and scalability, Midsize ensures that businesses can adapt to changing needs without compromising efficiency.

    Built for businesses on the rise, Midsize empowers companies to optimize operations, manage growth effectively, and maintain a competitive edge in their industry.
    `,
  },
  {
    slug: "startup",
    title: "STARTUP",
    description: `
    Startup is a dynamic solution crafted to meet the unique needs of early-stage companies. Designed to support rapid growth and innovation, it provides essential tools for streamlining operations, managing resources, and fostering collaboration.

    With features like project management, real-time analytics, and workflow automation, Startup empowers young businesses to focus on what matters most—building great products and scaling efficiently. The platform's intuitive design and flexibility make it easy for startups to adapt and grow without being bogged down by operational complexities.

    Built for agility and innovation, Startup helps new ventures turn their bold ideas into reality, driving success in a competitive landscape.
    `,
  },
  {
    slug: "enterprise",
    title: "ENTERPRISE",
    description: `
    Enterprise is a robust solution designed to meet the complex demands of large-scale organizations. Built for efficiency and scalability, it offers advanced tools for resource management, process automation, and data-driven decision-making.

    With features like enterprise-grade security, seamless integrations, and real-time analytics, Enterprise empowers organizations to streamline operations and stay ahead in a competitive market. The platform is tailored to handle large volumes of data and users, ensuring reliability and performance at scale.

    Designed for innovation and efficiency, Enterprise enables organizations to optimize workflows, drive productivity, and maintain a competitive edge while adapting to the ever-evolving business landscape.
    `,
  },
];

function SolutionDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const solutionIndex = solutions.findIndex(
    (solution) => solution.slug.toLowerCase() === slug.toLowerCase()
  );
  const solution = solutions[solutionIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!solution) {
    return <div className="text-center text-xl mt-16">Solution not found.</div>;
  }

  const handleBack = () => {
    if (solutionIndex > 0) {
      navigate(`/solutions/${solutions[solutionIndex - 1].slug}`);
    }
  };

  const handleNext = () => {
    if (solutionIndex < solutions.length - 1) {
      navigate(`/solutions/${solutions[solutionIndex + 1].slug}`);
    }
  };

  const handleClose = () => {
    navigate("/Home");
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
      <h1 className="text-4xl font-bold mb-6">{solution.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {solution.description}
      </p>
      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          className="px-7 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
          disabled={solutionIndex === 0}
        >
          Back
        </button>
        {solutionIndex < solutions.length - 1 && (
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

export default SolutionDetail;

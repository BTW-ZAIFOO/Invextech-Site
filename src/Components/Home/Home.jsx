import React, { useEffect, useState } from "react";
import HeaderSection from "./Header/HeaderSection";
import ProjectsSection from "./Header/ProjectSection";
import SolutionsSection from "./Solutions/SolutionSection";
import TestimonialsSection from "./Testimonials/TestimonialSection";
import assets from "../../assets/assets";

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

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const handleCardClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
  };

  const testimonials = [
    {
      name: "John Doe",
      testimonial:
        "This company did an amazing job with our website. Highly recommend!",
      role: "CEO, Company X",
      rating: 5, // rating out of 5
      image:
        "https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff", // Fake image URL
    },
    {
      name: "Jane Smith",
      testimonial:
        "The team was professional and delivered beyond our expectations!",
      role: "Marketing Director, Company Y",
      rating: 4, // rating out of 5
      image:
        "https://ui-avatars.com/api/?name=Jane+Smith&background=random&color=fff", // Fake image URL
    },
    {
      name: "Michael Lee",
      testimonial:
        "Outstanding service and great communication. Definitely working with them again!",
      role: "Product Manager, Company Z",
      rating: 4, // rating out of 5
      image:
        "https://ui-avatars.com/api/?name=Michael+Lee&background=random&color=fff", // Fake image URL
    },
  ];

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
      <HeaderSection />
      <ProjectsSection counters={counters} />
      <SolutionsSection solutions={solutions} />
      <TestimonialsSection
        testimonials={testimonials}
        selectedTestimonial={selectedTestimonial}
        handleCardClick={handleCardClick}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default Home;
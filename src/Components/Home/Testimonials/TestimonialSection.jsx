import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const TestimonialsSection = ({
  testimonials,
  selectedTestimonial,
  handleCardClick,
  handleCloseModal,
}) => {
  // Function to handle clicks outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      handleCloseModal();
    }
  };

  return (
    <div className="relative">
      <div
        className={`max-w-[1120px] mx-auto mt-16 py-10 sm:px-6 lg:px-8 ${
          selectedTestimonial ? "blur-sm" : ""
        }`}
      >
        <div className="text-center items-center mb-12">
          <h2 className="text-center text-3xl md:text-4xl font-extralight text-black mb-4">
            <span className="text-sky-500 border-b-4 border-sky-500 font-extrabold">
              CLIENT TESTIMONIALS
            </span>
          </h2>
          <h3 className="text-slate-800 font-bold text-center items-center mb-6 mt-6 text-3xl md:text-3xl">
            What Our Clients Say
          </h3>
          <p className="text-center text-base md:text-xl font-normal text-gray-800">
            See how we have helped businesses grow across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 text-center pb-8 mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center border-2 border-slate-300 p-12 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-sky-500 bg-white cursor-pointer"
              onClick={() => handleCardClick(testimonial)}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s Avatar`}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-lg font-medium text-gray-700 mb-2">
                "{testimonial.testimonial}"
              </p>
              <div className="flex mb-2">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-xl ${
                      starIndex < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm sm:text-base mb-2 text-blue-900">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            to="/TestimonialForm.jsx"
            className="text-lg font-semibold text-sky-500 hover:text-sky-700"
          >
            Add Your Testimonial
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            id="modal-overlay"
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              className="relative bg-slate-100 p-10 rounded-lg shadow-lg max-w-lg w-full"
              initial={{ scale: 0.7 }} // Start with smaller scale
              animate={{ scale: 1 }} // Zoom in to normal scale
              exit={{ scale: 0.7 }} // Zoom out before exit
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
              <button
                className="absolute top-5 right-5 text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={selectedTestimonial.image}
                  alt={`${selectedTestimonial.name}'s Avatar`}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-lg font-medium text-gray-700 mb-2">
                  "{selectedTestimonial.testimonial}"
                </p>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`text-xl ${
                        starIndex < selectedTestimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-semibold text-gray-900">
                  {selectedTestimonial.name}
                </p>
                <p className="text-sm sm:text-base mb-2 text-blue-900">
                  {selectedTestimonial.role}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialsSection;

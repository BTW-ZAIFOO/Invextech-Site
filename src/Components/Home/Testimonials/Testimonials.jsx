import React from "react";

const Testimonials = ({ testimonials, selectedTestimonial, handleCardClick, handleCloseModal }) => {
  return (
    <div>
      {testimonials.map((testimonial, index) => (
        <div key={index} onClick={() => handleCardClick(testimonial)}>
          <p>{testimonial.name}</p>
          <p>{testimonial.testimonial}</p>
          <p>{testimonial.role}</p>
          <img src={testimonial.image} alt={testimonial.name} />
        </div>
      ))}
      {selectedTestimonial && (
        <div>
          <p>{selectedTestimonial.name}</p>
          <p>{selectedTestimonial.testimonial}</p>
          <p>{selectedTestimonial.role}</p>
          <img src={selectedTestimonial.image} alt={selectedTestimonial.name} />
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
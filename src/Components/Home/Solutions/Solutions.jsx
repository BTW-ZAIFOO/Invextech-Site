import React from "react";

const Solutions = ({ solutions }) => {
  return (
    <div>
      {solutions.map((solution, index) => (
        <div key={index}>
          <img src={solution.image} alt={solution.title} />
          <p>{solution.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Solutions;
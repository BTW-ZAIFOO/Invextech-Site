import React from 'react';
import { useLocation } from 'react-router-dom';

function FixedContent() {
  const location = useLocation();

  // Check if the user is on the homepage
  const isDefaultRoute = location.pathname === '/';

  return (
    // Show this content only on the homepage
    isDefaultRoute && (
      <div className="w-full bg-slate-100">
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center mt-16 top-14 pt-20">
          Welcome to Invextech Official Website.
        </h1>

        {/* Description about the team */}
        <p className="text-center text-gray-700 mt-2 p-10 text-2xl mb-10">
          We are a team of talented developers who are passionate about their hard work.
        </p>

        {/* Suggestion to explore the website */}
        <p className="text-center text-gray-700 mt-2 p-5 text-2xl mb-10">
          Explore more about us and our services by clicking the LINKS above.
        </p>
      </div>
    )
  );
}

export default FixedContent;

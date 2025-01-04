import React from 'react';
import { useLocation } from 'react-router-dom';
import Heading from '../FixedContent/Heading';
import Description from '../FixedContent/Description';
import Suggestion from '../FixedContent/Suggestion';

function FixedContent() {
  const location = useLocation();

  // Check if the user is on the homepage
  const isDefaultRoute = location.pathname === '/';

  return (
    isDefaultRoute && (
      <div className="w-full bg-slate-100">
        <Heading />
        <Description />
        <Suggestion />
      </div>
    )
  );
}

export default FixedContent;
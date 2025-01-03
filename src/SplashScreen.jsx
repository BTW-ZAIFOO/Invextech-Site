import React, { useState, useEffect } from "react";
import assets from "./assets/assets";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the splash screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust the time duration

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-950 flex justify-center items-center z-50 animate-fade-in">
      <img
        src={assets.logo_preview}
        alt="InvexTech Logo"
        className="max-w-[300px] animate-scale-in bg-white rounded-lg shadow-lg p-1"
      />
    </div>
  );
};

export default SplashScreen;

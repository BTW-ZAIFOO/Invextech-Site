import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import Home from "./Components/Home.jsx";
import CompletedProjects from "./Components/CompletedProjects.jsx";
import Services from "./Components/Services.jsx";
import Company from "./Components/Company.jsx";
import Register from "./Components/Register.jsx";
import { Footer } from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import ProjectDetail from "./Components/ProjectDetail.jsx";
import SolutionDetail from "./Components/SolutionDetail.jsx";
import Fixedcontent from "./Components/Fixedcontent.jsx";

// Main App component
export const App = () => {
  return (
    <Router>
      {/* Navbar is rendered at the top of all pages */}
      <Navbar />
      <div className="w-full bg-slate-100">
        {/* Define application routes */}
        <Routes>
          <Route path="/Home" element={<Home />} /> {/* Home Page */}
          <Route path="/CompletedProjects" element={<CompletedProjects />} /> {/* Completed Projects Page */}
          <Route path="/projects/:slug" element={<ProjectDetail />} /> {/* Individual Project Detail Page */}
          <Route path="/solutions/:slug" element={<SolutionDetail />} /> {/* Individual Solution Detail Page */}
          <Route path="/services" element={<Services />} /> {/* Services Page */}
          <Route path="/company" element={<Company />} /> {/* Company Page */}
          <Route path="/career" element={<Register />} /> {/* Career Registration Page */}
        </Routes>
        
        {/* Fixed content to show on specific routes */}
        <Fixedcontent />

        {/* Footer is displayed at the bottom of all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

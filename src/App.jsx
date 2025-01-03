import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing components
import Home from "./Components/Home/Home.jsx";
import CompletedProjects from "./Components/Projects/CompletedProjects.jsx";
import Services from "./Components/Services/Services.jsx";
import Company from "./Components/Company/Company.jsx";
import Register from "./Components/Registration/Register.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import ProjectDetail from "./Components/Projects/ProjectDetail.jsx";
import SolutionDetail from "./Components/Home/Solutions/SolutionDetail.jsx";
import Fixedcontent from "./Components/FixedContent/Fixedcontent.jsx";

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

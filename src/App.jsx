import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

export const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="w-full bg-slate-100">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/CompletedProjects" element={<CompletedProjects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/company" element={<Company />} />
          <Route path="/career" element={<Register />} />
        </Routes>
        <Fixedcontent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

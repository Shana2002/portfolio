import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import Project from "./components/Project1";
import Contact from "./components/Contact";
import ProjectDetails from "./widget/project_details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectLists from "./pages/ProjectLists";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-white-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/projects" element={<ProjectLists/>} />
            <Route path="/project/:name" element={<ProjectPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import About from "../components/About";
import Hero from "../components/Hero"; 
import Technology from "../components/Technology";
import Project from "../components/Project1";
import Contact from "../components/Contact";
import ProjectDetails from "../widget/project_details";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Technology />
      <Project />
      <Contact />
    </>
  );
};

export default HomePage;

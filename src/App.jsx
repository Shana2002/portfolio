import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import Technology from "./components/Technology";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-white-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import logo from "../assets/logo.png";
import Alink from "../widget/alink";
import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { ImProfile } from "react-icons/im";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div>
      <nav className="sticky flex items-center justify-between py-1 px-4">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="hidden lg:flex text-lg gap-3">
          <Alink text="Home" link="home" />
          <Alink text="About" link="about" />
          <Alink text="Technology" link="tech" />
          <Alink text="Projects" link="projects" />
          <Alink text="Educations" link="education" />
          <Alink text="contact" link="contact" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
          <a href="https://www.linkedin.com/in/hanska-r-a565681a1/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Shana2002">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/rav1shan._/">
            <FaInstagram />
          </a>
          <a href="src/assets/hansaka_ravishan.pdf" download="hansaka.pdf"><ImProfile /></a>
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-white">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div
        className={`fixed top-0 right-0 h-full w-2/3 md:w-3/12 bg-gray-800 text-white p-4 transform transition-transform duration-300 ease-in-out 
                    ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
      >
        <button onClick={closeMenu} className="absolute top-4 right-4 text-2xl text-white">
          <FaTimes />
        </button>
        <div className="flex flex-col gap-4 mt-16">
          <Alink text="Home" link="contact" onClick={closeMenu} />
          <Alink text="About" link="contact" onClick={closeMenu} />
          <Alink text="Technology" link="contact" onClick={closeMenu} />
          <Alink text="Projects" link="contact" onClick={closeMenu} />
          <Alink text="Educations" link="contact" onClick={closeMenu} />
          <Alink text="Contact" link="contact" onClick={closeMenu} />
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;

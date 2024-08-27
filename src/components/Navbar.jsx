import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-1 px-4">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo}  alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
                <a href="https://www.linkedin.com/in/hanska-r-a565681a1/"><FaLinkedin /></a>
                <a href="https://github.com/Shana2002"><FaGithub /></a>
                <a href="https://www.instagram.com/rav1shan._/"><FaInstagram /></a>
            </div>
      </nav>
    </div>
  )
}

export default Navbar

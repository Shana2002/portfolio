import React from 'react'
import logo from "../assets/kevinRushLogo.png"
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
                <FaLinkedin />
                <FaGithub />
                <FaTwitter />
                <FaInstagram />
            </div>
      </nav>
    </div>
  )
}

export default Navbar

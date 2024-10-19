import React from 'react'
import aboutImg from "../assets/about1.jpg"
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About 
            <span className='text-neutral-500'>Me</span>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                     whileInView={{opacity :1 , x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:0.5}}
                     className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div
                    whileInView={{opacity :1 , x:0}}
                    initial={{opacity:0,x:+100}}
                    transition={{duration:0.5}}
                    className="flex justify-center items-center">
                        <p className="my-2 maxw-xl text-base pt-36">{ABOUT_TEXT}</p>
                    </motion.div>
                </div>
            </div>
        </h1>
      
    </div>
  )
}

export default About

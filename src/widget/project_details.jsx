import React from 'react'
import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";

function ProjectDetails({ project, onClose }) {
  return (
    <div className='top-0 bottom-0 w-[100vw] h-[100vh] fixed flex items-center justify-center'>
      <div className='w-[80vw] h-[80vh] bg-gray-800 rounded-2xl flex flex-col scroll-auto sm:flex-row gap-2 overflow-y-auto'>
      {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button> */}
        <div className='w-full sm:w-1/2 h-1/2 sm:h-full py-2'>
            <img className="w-full h-full object-contain"src={project.image} alt="" />
        </div>
        <div className='w-full sm:w-1/2 h-1/2 sm:h-full sm:overflow-y-auto py-3 flex flex-col gap-7 items-center'>
            <h1>
                {PROJECTS[3].title}
            </h1>
            <a href={PROJECTS[3].link}><FaGithub/></a>
            <p className='px-3'>{PROJECTS[3].description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails

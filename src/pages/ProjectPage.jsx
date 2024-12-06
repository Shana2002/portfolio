import React from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS } from "../constants";
import project from '../components/Project1';


const ProjectPage = () => {
    const {name} = useParams();
    const project = PROJECTS.find((project)=>project.name === name);
    if(!project) return (<h1>Error</h1>)
  return (
    <div className='flex bg-black-rgba w-full h-full py-12 px-6 gap-5 rounded-xl relative'>
        <a className='absolute top-6 left-6 text-4xl cursor-pointer border-2 border-white p-2 text-center corner' >&times;</a>
      <img src={project.image} alt="" className='w-1/2 h-[50vh] object-contain' />
      <div className='flex flex-col justify-start'>
        <h3 className='text-4xl py-4'>{project.title}</h3>
        <p className='py-3'>{project.description}</p>
        <p>{project.link}</p>
      </div>
    </div>
  )
}

export default ProjectPage

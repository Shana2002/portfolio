import React from 'react';
import { useParams } from 'react-router-dom';
import { PROJECTS } from "../constants";
import { IoIosArrowBack } from "react-icons/io";
import project from '../components/Project1';
import MarkdownViewer from '../widget/MarkDownViewer'
import GitHubReadmeViewer from '../widget/GithubReadmeViewer'


const ProjectPage = () => {
    const {name} = useParams();
    const project = PROJECTS.find((project)=>project.name === name);
    const fileUrl= 'https://raw.githubusercontent.com/Shana2002/puppy-mart/main/README.md';
    if(!project) return (<h1>Error</h1>)
  return (
    <div className='flex bg-readme-bg w-full h-full pt-28 py-12 px-6 gap-5 rounded-xl relative'>
        <a className='absolute top-6 left-6 text-4xl cursor-pointer border-2 border-white p-2 text-center rounded-full' ><IoIosArrowBack/></a>
      {/* <img src={project.image} alt="" className='w-1/2 h-[50vh] object-contain' />
      <div className='flex flex-col justify-start'>
        <h3 className='text-4xl py-4'>{project.title}</h3>
        <p className='py-3'>{project.description}</p>
        <p>{project.link}</p>
      </div> */}
      {/* <MarkdownViewer fileUrl={fileUrl} /> */}
      <GitHubReadmeViewer user="Shana2002" repo="puppy-mart" />
    </div>
  )
}

export default ProjectPage

import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProjectDetails from "../widget/project_details";

const project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  return (
    <div className="flex flex-col justify-center items-center border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Porjects
      </motion.h2>
      <div>
        <div className="w-full grid gap-10 grid-cols-1 content-center lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className=" w-full bg-black-rgba flex flex-col xl:flex-row lg:justify-center gap-3 items-center p-4 rounded-lg hover:bg-black-rgba-hover cursor-pointer "
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-1/2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className=" w-full h-52 mb-6 rounded-s object-contain"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-bold text-2xl">
                  <a className="flex gap-2 items-center">
                    <FaGithub />
                    {project.title}
                  </a>
                </h6>
                <p className="mb-4 text-neutral-400 line-clamp-3">
                  {project.description}
                </p>
                <div className="w-full flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-3 py-1 text-sm my-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={closeProjectDetails}
        />
      )} */}
      <Link className="w-full text-center py-4 my-10 bg-black-rgba rounded cursor-pointer hover:bg-black-rgba-hover" to={`/projects`}>
          Show all projects
      </Link>
    </div>
  );
};

export default project;

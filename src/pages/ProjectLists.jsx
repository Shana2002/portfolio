import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import {Link} from 'react-router-dom'

const ProjectLists = () => {
  const [projects, setProjects] = useState([]); // State to store projects
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [topics, setTopics] = useState({}); // State to store topics for each project
  const sampleImage = "https://via.placeholder.com/150";
  

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.github.com/users/shana2002/repos?sort=updated",
          {
            headers: {
              Authorization: "",
            },
          }
        );
        const projectData = response.data;

        setProjects(projectData);

        // Fetch topics for each project
        const topicsData = {};
        await Promise.all(
          projectData.map(async (project) => {
            const topicResponse = await axios.get(
              `https://api.github.com/repos/shana2002/${project.name}/topics`,
              {
                headers: {
                  Accept: "application/vnd.github.mercy-preview+json",
                  Authorization: "",
                },
              }
            );
            topicsData[project.name] = topicResponse.data.names || [];
          })
        );
        setTopics(topicsData);
      } catch (err) {
        setError("Failed to fetch projects or topics.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-center text-neutral-400">Loading projects...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        <div className="w-full grid gap-10 grid-cols-1 content-center lg:grid-cols-2">
          {projects.map((project, index) => (
            <Link to={`/project/${project.name}`}>
              <div
                key={index}
                className="w-full bg-black-rgba flex flex-col xl:flex-row lg:justify-center gap-3 items-center p-4 rounded-lg hover:bg-black-rgba-hover cursor-pointer"
              >
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-1/2"
                >
                  <img
                    src={`https://github.com/Shana2002/${project.name}/blob/main/sample.png?raw=true`}
                    alt={project.name}
                    className="w-full h-52 mb-6 rounded-s object-contain"
                    onError={(e) => (e.target.src = sampleImage)} // Fallback to sampleImage if the image fails to load
                  />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h6 className="mb-2 font-bold text-2xl">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center"
                    >
                      <FaGithub />
                      {project.name}
                    </a>
                  </h6>
                  <p className="mb-4 text-neutral-400 line-clamp-3">
                    {project.description || "No description available."}
                  </p>
                  <div className="w-full flex flex-wrap">
                    {topics[project.name] &&
                      topics[project.name].map((topic, index) => (
                        <span
                          key={index}
                          className="mr-2 rounded bg-neutral-900 px-3 py-1 text-sm my-2"
                        >
                          {topic}
                        </span>
                      ))}
                  </div>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLists;

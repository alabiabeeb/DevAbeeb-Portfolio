// import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const Projects = () => {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FaLaptopCode className="title-icon" /> My Projects
      </motion.h2>
      <motion.div
        className="projects-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {projects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;

import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, live, code }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="project-img-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={live} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt /> Live
          </a>
          <a href={code} target="_blank" rel="noreferrer">
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

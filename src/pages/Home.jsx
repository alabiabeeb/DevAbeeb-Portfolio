import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
        import TypingText from "../components/TypingText"; // import at top
import { FaGithub, FaLinkedin, FaTwitter, FaRocket, FaEnvelope } from "react-icons/fa";
import { SiReact, SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import { Link } from "react-router-dom";

const roles = [
  "Web Designer.",
  "Web Developer.",
  "UI/UX Designer.",
  "Freelancer.",
  "Content Writer."
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500); // rotate every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-section">
        
        {/* ==== LEFT SIDE ==== */}
        <div className="hero-text">
<motion.h1
  className="hero-title"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Hi, I’m <span className="highlight">DEVABEEB</span> <br />
  A{" "}
  <TypingText
    texts={[
      "Web Designer.",
      "Web Developer.",
      "UI/UX Designer.",
      "Freelancer.",
      "Content Writer."
    ]}
    speed={100} // typing speed in ms
    pause={2000} // pause before deleting
  />
</motion.h1>


          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            A Passionate Frontend Developer
          </motion.h2>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            I design and develop modern web apps with smooth animations,
            responsive layouts, and clean UI using cutting-edge tools like React,
            Framer Motion, and more.
          </motion.p>

          {/* Tech stack icons */}
          <motion.div
            className="tech-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <SiReact title="React" className="react-icon" />
            <SiJavascript title="JavaScript" className="js-icon" />
            <SiHtml5 title="HTML5" className="html-icon" />
            <SiCss3 title="CSS3" className="css-icon" />
          </motion.div>

          {/* Social links */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <Link to="/projects" className="btn primary-btn">
              <FaRocket className="card-icons" /> View Projects
            </Link>
            <Link to="/contact" className="btn secondary-btn">
              <FaEnvelope /> Contact Me
            </Link>
          </motion.div>
        </div>

        {/* ==== RIGHT SIDE ==== */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/profile.jpg"
            alt="DEVABEEB portrait"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          {/* floating icons */}
          <motion.div
            className="floating-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.span
              className="float react"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <SiReact />
            </motion.span>
            <motion.span
              className="float js"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
            >
              <SiJavascript />
            </motion.span>
            <motion.span
              className="float css"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <SiCss3 />
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    
  );
};

export default Home;

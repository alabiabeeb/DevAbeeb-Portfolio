import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb, FaCode, FaReact, FaRocket } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const About = () => {
  return (
    <motion.section
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* ==== Floating Background Icons ==== */}
      <div className="floating-icons">
        <FaReact className="float-icon react-float" />
        <FaRocket className="float-icon rocket-float" />
      </div>

      {/* ==== Title ==== */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaLightbulb className="about-icon" /> About Me
      </motion.h2>

      {/* ==== About Paragraph ==== */}
      <motion.p
        className="about-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I’m <span className="highlight">DEVABEEB</span> — a creative and passionate{" "}
        <strong>Frontend React Developer</strong> with a strong eye for design and detail.{" "}
        I love transforming complex ideas into smooth, visually appealing, and highly functional{" "}
        digital experiences <IoIosStar />. My focus is crafting intuitive interfaces that merge{" "}
        performance and aesthetics using tools like <strong>React</strong>,{" "}
        <strong>Framer Motion</strong>, and <strong>Tailwind CSS</strong>.
        <br /><br />
        Over time, I’ve worked on projects from sleek landing pages to dynamic dashboards, blending 
        creativity with technology to deliver experiences that captivate users. I’m always exploring 
        new frameworks, improving UI animations, and finding smarter ways to solve frontend challenges.
        <br /><br />
        When I’m not coding, I’m usually sketching new interface ideas, watching tech breakdowns, 
        or experimenting with design systems — constantly learning, evolving, and creating.
      </motion.p>

      {/* ==== Cards Section ==== */}
      <motion.div
        className="about-cards"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {[
          {
            icon: <FaLaptopCode />,
            title: "Frontend Focused",
            text: "Building smooth, responsive, and interactive interfaces with React and modern JavaScript tools.",
          },
          {
            icon: <FaCode />,
            title: "Clean Code",
            text: "Writing maintainable, efficient, and scalable code that’s easy to debug and optimize.",
          },
          {
            icon: <FaRocket />,
            title: "Performance Driven",
            text: "Optimizing for speed, accessibility, and seamless cross-device experience.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="about-card"
            whileHover={{ scale: 1.07, rotate: index === 1 ? -1 : 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;

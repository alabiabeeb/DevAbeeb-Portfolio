import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter, FaRocket } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then(() => alert("Message sent! ✅"))
    .catch(() => alert("Error sending message ❌"));
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Have a project or idea? I’d love to hear from you! Drop me a message below. <FaRocket className="card-icon" />
      </motion.p>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="input-group">
          <input type="text" name="name" required />
          <label>Your Name</label>
        </div>

        <div className="input-group">
          <input type="email" name="email" required />
          <label>Your Email</label>
        </div>

        <div className="input-group">
          <textarea name="message" rows="5" required></textarea>
          <label>Your Message</label>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(0,123,255,0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      <motion.div
        className="contact-socials"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <a href="https://github.com/alabiabeeb" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/devtwins" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/alabiabeeb" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

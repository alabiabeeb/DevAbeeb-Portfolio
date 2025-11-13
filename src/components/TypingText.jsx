import React, { useState, useEffect } from "react";

const TypingText = ({ texts, speed = 150, pause = 1500 }) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing
        setCurrentText(fullText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // Start deleting after pause
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        // Deleting
        setCurrentText(fullText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        // Move to next text
        if (charIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, deleting ? speed / 2 : speed); // slower deleting

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts, speed, pause]);

  return <span className="theme-gradient">{currentText}</span>;
};

export default TypingText;

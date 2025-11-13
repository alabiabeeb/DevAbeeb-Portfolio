import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";


const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title="Toggle theme"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;

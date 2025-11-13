import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

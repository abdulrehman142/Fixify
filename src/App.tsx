import React from "react";
import "./index.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Body darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/portfolio/Portfolio";
import Themes from "./components/Themes";

function App() {
  return (
    <BrowserRouter basename="/My-Portfolio">
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path='project'element={<Project/>} /> */}
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

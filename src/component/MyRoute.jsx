/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Resume from "../component/Resume";
import Contact from "../component/Contact";
import About from "../component/About";
import "../css/MyRoute.css"; 

const MyRoute = () => {
  const location = useLocation();
  return (
    <div className="routes-container">
      <Routes location={location} key={location.pathname}>
        <Route path="/about" element={<div className="page-content"><About /></div>} />
        <Route path="/skills" element={<div className="page-content"><Skills /></div>} />
        <Route path="/projects" element={<div className="page-content"><Projects /></div>} />
        <Route path="/resume" element={<div className="page-content"><Resume /></div>} />
        <Route path="/contact" element={<div className="page-content"><Contact /></div>} />
      </Routes>
    </div>
  );
};

export default MyRoute;

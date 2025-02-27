/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/Header";
import MyRoute from "./component/MyRoute";
import Footer from "./component/Footer";
import About from "./component/About";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
  }, []);

  return (
    <Router>
      {isLoading ? (
        <motion.div
          className="loading-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="loading-spinner"
            animate={{ rotate: 360 }}
            transition={{
              loop: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />
          <p>Loading...</p>
        </motion.div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/about" replace />}
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<MyRoute />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
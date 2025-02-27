/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header";
import MyRoute from "./component/MyRoute";
import Footer from "./component/Footer";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <MyRoute></MyRoute>
      <Footer></Footer>
    </Router>
  )
};

export default App

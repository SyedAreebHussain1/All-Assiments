import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from "./comps/Header";
import HomePage from "./comps/Home";
import Footer from "./comps/Footer";

import "./App.css";
import "./Props.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

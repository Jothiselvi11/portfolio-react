
// import './App.scss';
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route />
        
        <Route path="about" element={<About />}/>
        <Route path="skills" element={<Skills />}/>
        <Route path="project" element={<Projects />}/>
        <Route path="contact" element={<Contact />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

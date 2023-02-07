import  NavBar  from "./components/NavBar";
import Portfolio from "./components/Projects";
import React from 'react';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResumeModal from "./components/Resume";

function App() {
  return (
    <div className="App">
     < NavBar />
     < Header />
     < About />
     < Portfolio />
     < Contact />
     < ResumeModal />
     < Footer />
    </div>
  );
}

export default App;

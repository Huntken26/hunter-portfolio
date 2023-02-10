import  NavBar  from "./components/NavBar";
import Portfolio from "./components/Projects";
import React from 'react';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     < NavBar />
     < Header />
     < About />
     < Portfolio />
     < Contact />
     < Footer />
    </div>
  );
}

export default App;

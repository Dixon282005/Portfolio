import Nav from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Icons from "../components/Icons.jsx";
import '../styles/body.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <div className="con-hero">
          <h1 className="title">Hi, I'm</h1>
          <h1 className="title">Dixon Ramos</h1>
          <p className="hero-subtitle">FullStack Developer</p>
          <Icons />
        </div>
          
      </main>
    </>
  );
}

export default App;
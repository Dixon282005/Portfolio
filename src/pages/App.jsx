import Nav from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import Icons from "../components/Icons.jsx";
import Footer from "../components/Footer.jsx";
import React, { lazy, Suspense } from "react";
import '../styles/body.css';
import Spinner from '../components/Spinner';

// Lazy load About y Projects
const About = lazy(() => import("../components/About.jsx"));
const Projects = lazy(() => import("../components/Projects.jsx"));



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

      <Suspense fallback={<Spinner/>}>
        <About />
        <Projects />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;

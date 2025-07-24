import Nav from "../components/Navbar.jsx";
import Icons from "../components/Icons.jsx";
import Footer from "../components/Footer.jsx";
import React, { lazy, Suspense } from "react";
import '../styles/body.css';
import Spinner from '../components/Spinner';
import ScrollToTop from "../components/Topbutton.jsx";
import Typewriter from "../components/Typewritter.jsx";

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
          <p className="hero-subtitle"><Typewriter/></p>
          <Icons />
        </div>
      </main>
      <Suspense fallback={<Spinner />}>
        <About />
        <Projects />
      </Suspense>
      <ScrollToTop />


      <Footer />
    </>
  );
}

export default App;

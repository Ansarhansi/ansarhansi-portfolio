import React from "react";
import Layout from "./Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./components/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import "./index.css"; // or whatever your CSS filename is

const App: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default App;

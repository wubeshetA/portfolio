import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Projects from "./projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import Project from "./components/Projects2/Projects";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-0">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4">
        <Banner />
        <About />
        <Project />
        <Resume />
        <Contact />
        <Footer />
        <ScrollUpButton />
      </div>
    </div>
  );
}

export default App;

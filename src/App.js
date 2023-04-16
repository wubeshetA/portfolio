import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Projects from "./projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <Resume />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

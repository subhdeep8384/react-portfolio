import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () =>{
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div></div>
      </div>



      <div className="container mx-auto px-8 ">
      <NavBar />
      <Hero />
      <About />
      <Technology />
      <Experience />
      <Projects/>
      <Contact />
      </div>
    </div>
  )
}

export default App
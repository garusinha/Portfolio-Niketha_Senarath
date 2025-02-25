import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
    </div>
  );
};

export default App;

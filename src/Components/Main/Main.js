import React from "react";
import classes from "./Main.module.css";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

const Main = () => {
  return (
    <main className={classes.main}>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;

import React from "react";
import HeroSection from "./HeroSection";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <HeroSection />
    </main>
  );
};

export default Main;

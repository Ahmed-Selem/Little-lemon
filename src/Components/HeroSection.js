import React from "react";
import classes from "./HeroSection.module.css";
import image from "../Assets/restauranfood.jpg";
const HeroSection = () => {
  return (
    <section className={classes.section}>
      <div>
        <h1>Little lemon</h1>
        <h5>Chicago</h5>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </p>
        <button>Reserve a table</button>
      </div>
      <img src={image} alt="cooked"></img>
    </section>
  );
};

export default HeroSection;

import React from "react";

import classes from "./HeroSection.module.css";
import image from "../../Assets/restauranfood.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <article className={classes.section}>
      <div>
        <h1>Little lemon</h1>
        <h5>Chicago</h5>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </p>
        <Link to="/booking">
          <button>Reserve a table</button>
        </Link>
      </div>
      <img src={image} alt="cooked"></img>
    </article>
  );
};

export default HeroSection;

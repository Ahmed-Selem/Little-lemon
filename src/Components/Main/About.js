import React from "react";
import classes from "./About.module.css";
import image1 from "../../Assets/Mario and Adrian A.jpg";

const About = () => {
  return (
    <article id="About" className={classes.about}>
      <section className={classes.section}>
        <h2>About</h2>
        <h1>Little lemon</h1>
        <h5>Chicago</h5>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </p>
      </section>
      <div>
        <img src={image1} alt="Mario and Adrian" />
      </div>
    </article>
  );
};

export default About;

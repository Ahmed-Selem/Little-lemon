import React from "react";
import classes from "./TestimonialsCard.module.css";

const TestimonialsCard = ({ image, name, description, rating }) => {
  return (
    <section className={classes.section}>
      <h5> rating: {rating}</h5>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
    </section>
  );
};

export default TestimonialsCard;

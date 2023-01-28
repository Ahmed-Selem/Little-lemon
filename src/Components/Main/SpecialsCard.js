import React from "react";
import deImage from "../../Assets/delivery.png";
import classes from "./SpecialsCard.module.css";

const SpecialsCard = ({ image, title, description, price }) => {
  return (
    <section className={classes.section}>
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <h4>{price}</h4>
      <p>{description}</p>
      <h5>Order Delivery</h5>
      <img id={classes.deIcon} src={deImage} alt="delivery Icon" />
    </section>
  );
};

export default SpecialsCard;

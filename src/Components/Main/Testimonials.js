import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import classes from "./Testimonials.module.css";
import image from "../../Assets/profile.jpg";

const Testimonials = () => {
  return (
    <article className={classes.article}>
      <h2>Testimonials</h2>
      <div className={classes.testimonials}>
        <TestimonialsCard
          rating="5"
          image={image}
          name="jack"
          description="Taste very good"
        />
        <TestimonialsCard
          rating="4"
          image={image}
          name="Lena"
          description="Food was delicious"
        />
        <TestimonialsCard
          rating="3"
          image={image}
          name="Kita"
          description="Took long time"
        />
        <TestimonialsCard
          rating="4"
          image={image}
          name="Tom"
          description="tasty food"
        />
        <TestimonialsCard
          rating="5"
          image={image}
          name="Mike"
          description="Best restaurant ever"
        />
      </div>
    </article>
  );
};

export default Testimonials;

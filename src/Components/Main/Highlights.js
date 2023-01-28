import React from "react";
import classes from "./Highlights.module.css";
import SpecialsCard from "./SpecialsCard";
import image1 from "../../Assets/greek.jpg";
import image2 from "../../Assets/bruchetta.svg";

import image3 from "../../Assets/lemon.jpg";

const Highlights = () => {
  return (
    <article id="Menu" className={classes.article}>
      <div className={classes.specials}>
        <h1>This weeks specials</h1>

        <button>Online Menu</button>
      </div>
      <div className={classes.cards}>
        <SpecialsCard
          image={image1}
          title="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <SpecialsCard
          image={image2}
          title="Bruchetta"
          price="$5.99"
          description="OurBrushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <SpecialsCard
          image={image3}
          title="Lemon Dessert"
          price="$5.00"
          description="This comes straight from grandmas's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </article>
  );
};

export default Highlights;

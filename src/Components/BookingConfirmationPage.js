import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./BookingConfirmedPage.module.css";
const BookingConfirmationPage = () => {
  return (
    <>
      <Header />
      <article className={classes.article}>Confirmed</article>
      <Footer />
    </>
  );
};

export default BookingConfirmationPage;

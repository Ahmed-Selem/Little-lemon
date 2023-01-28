import React from "react";
import classes from "./Footer.module.css";
import image from "../../Assets/restaurant.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <img src={image} alt="Restaurant view" />
      <section>
        <h2>Doormat Navigation</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Menu">Menu</a>
          </li>
          <li>
            <Link to="/booking">Reservation</Link>
          </li>
          <li>
            <a href="#Order">Order Online</a>
          </li>
          <li>
            <a href="#Login">Login</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="#Address">Address</a>
          </li>
          <li>
            <a href="#Phone">Phone Number</a>
          </li>
          <li>
            <a href="#Email">Email</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <a href="#Address">Address</a>
          </li>
          <li>
            <a href="#Phone">Phone Number</a>
          </li>
          <li>
            <a href="#Email">Email</a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

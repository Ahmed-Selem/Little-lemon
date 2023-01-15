import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Home">About</a>
        </li>
        <li>
          <a href="#Home">Menu</a>
        </li>
        <li>
          <a href="#Home">Reservation</a>
        </li>
        <li>
          <a href="#Home">Order Online</a>
        </li>
        <li>
          <a href="#Home">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

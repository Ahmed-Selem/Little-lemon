import React from "react";
import logo from "../../Assets/Logo.svg";
import Nav from "./Nav";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header} aria-label="Header of the Website">
      <img alt="logo" src={logo} />
      <Nav />
    </header>
  );
};

export default Header;

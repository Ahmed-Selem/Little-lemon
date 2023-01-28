import React from "react";
import logo from "../../Assets/Logo.svg";
import Nav from "./Nav";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <img alt="logo" src={logo} />
      <Nav />
    </header>
  );
};

export default Header;

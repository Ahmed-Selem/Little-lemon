import React from "react";
import logo from "../Assets/Logo.svg";
import Nav from "./Nav";
const Header = () => {
  return (
    <header>
      <img alt="logo" src={logo} />
      <Nav />
    </header>
  );
};

export default Header;

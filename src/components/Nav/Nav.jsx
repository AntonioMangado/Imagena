import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  <nav className="nav">
    <Link className="nav__link" to="/">
      <h1 className="nav__logo">Imagena</h1>
    </Link>
    <Link className="nav__link" to="/myphotos">My photos</Link>
  </nav>
  );
};

export default Nav;

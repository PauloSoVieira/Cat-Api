import React from "react";
import { Link } from "react-router-dom";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Cats">Cats Album</Link>
        </li>
        <li>
          <Link to="Login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

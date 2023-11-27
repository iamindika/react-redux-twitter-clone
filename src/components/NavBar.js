import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink
          to="/"
          activeStyle={{
            fontWeight: 700,
          }}
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/new"
          activeStyle={{
            fontWeight: 700,
          }}
        >
          New Tweet
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;

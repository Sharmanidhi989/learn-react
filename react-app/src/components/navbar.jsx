import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand mb-0 h1" to="/">
          mOvIeSmAnIa
        </Link>
        <NavLink className="nav-item nav-link" to="/movies">
          Movies
        </NavLink>
        <NavLink className="nav-item nav-link" to="/customers">
          Customers
        </NavLink>
        <NavLink className="nav-item nav-link" to="/rentals">
          Rentals
        </NavLink>
        <NavLink className="nav-item nav-link" to="/login">
          Login
        </NavLink>
      </nav>
    </Fragment>
  );
};

export default Navbar;

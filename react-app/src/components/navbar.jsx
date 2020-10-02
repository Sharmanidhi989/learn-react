import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ currentUser, onLogout }) => {
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
        {!currentUser && (
          <Fragment>
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/register">
              Register
            </NavLink>
          </Fragment>
        )}
        {currentUser && (
          <Fragment>
            <h1>{currentUser.email}</h1>
            <span className="text-primary" onClick={() => onLogout()}>
              LogOut
            </span>
          </Fragment>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;

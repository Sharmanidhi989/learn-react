import React, { Fragment } from "react";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Counter
          <span className="m-2 badge badge-secondary">{props.count}</span>
        </span>
      </nav>
    </Fragment>
  );
};

export default Navbar;

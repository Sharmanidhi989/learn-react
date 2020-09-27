import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">admin</Link>
      </li>
    </ul>
    // to avoid the full https requests Link has an eventhandler that prevent it from reloading entire page instead just updates the url
  );
};

export default NavBar;

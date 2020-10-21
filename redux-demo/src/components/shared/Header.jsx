import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const activeStyle = { color: "#800000" }
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
      {'|'} <NavLink to="/about" activeStyle={activeStyle} >About</NavLink>
      {'|'} <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>    
    </nav>
  );
};

export default Header;

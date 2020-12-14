import React, { useState }from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [active, setActive] = useState(false);
  const activeStyle = { color: "#800000" }

  const toggleNavBar = () => {
    setActive(!active)
  }

  const navBarClass = active ? 'active' : ''
  return (
    <Fragment>
      <span onClick={toggleNavBar}>&#9776; open</span>
      <div className={"overlay " + navBarClass}>
        <a className="closebtn" onClick={toggleNavBar}>&times;</a>
        <div className="overlay-content">
          <NavLink to="/" activeStyle={activeStyle} onClick={toggleNavBar} exact>Home</NavLink>
          <NavLink to="/about" activeStyle={activeStyle} onClick={toggleNavBar} >About</NavLink>
          <NavLink to="/courses" activeStyle={activeStyle} onClick={toggleNavBar} >Courses</NavLink> 
        </div>
      </div>
    </Fragment>
      
  );
};

export default Header;

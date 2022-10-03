import React from 'react';
import { NavLink } from "react-router-dom";
  
export default function NavBar()  {
  return (
    <React.Fragment>
      <div >
        <NavLink
          to="/"
        ><span className ="navBar">HOME</span>
        </NavLink>

        <NavLink
          to="/create"
        >
        <span className ="navBar">CREATE</span>
        </NavLink>

        <NavLink
          to="/explore"
        >
        <span className ="navBar">EXPLORE</span>
        </NavLink>

        <NavLink
          to="/go"
        >
        <span className ="navBar">GO</span>
        </NavLink>

        <NavLink
          to="/login"
        >
        <span className ="navBar">LOGIN</span>
        </NavLink>
      </div>
    </React.Fragment>
  );
}
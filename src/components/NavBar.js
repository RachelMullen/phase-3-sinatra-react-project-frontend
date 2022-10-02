import React from 'react';
import { NavLink } from "react-router-dom";
  
export default function NavBar()  {
  return (
    <React.Fragment>
      <div >
        <NavLink
          to="/"
        ><span class ="navBar">HOME</span>
        </NavLink>

        <NavLink
          to="/create"
        >
        <span class ="navBar">CREATE</span>
        </NavLink>

        <NavLink
          to="/explore"
        >
        <span class ="navBar">EXPLORE</span>
        </NavLink>

        <NavLink
          to="/go"
        >
        <span class ="navBar">GO</span>
        </NavLink>

        <NavLink
          to="/signin"
        >
        <span class ="navBar">SIGNIN</span>
        </NavLink>
      </div>
    </React.Fragment>
  );
}
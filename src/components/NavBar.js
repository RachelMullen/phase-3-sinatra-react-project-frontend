import React from 'react';
import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";
  
export default function NavBar ()  {
  return (
    <React.Fragment>
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#21005D",
          }}
          img src={home} 
        >  Home
        </NavLink>
        <NavLink
          to="/profile"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#21005D",
          }}
        >
          Profile
        </NavLink>
        <NavLink
          to="/cities"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#21005D",
          }}
        >
          My Cities
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "#21005D",
          }}
        >
          About
        </NavLink>
      </div>
    </React.Fragment>
  );
}
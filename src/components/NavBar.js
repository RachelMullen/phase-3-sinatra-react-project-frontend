import React from 'react';
import { NavLink } from "react-router-dom";
import Squirtle from '../assets/squirtle.png';
  
export default function NavBar({ user })  {
  return (
    <React.Fragment>
      <div>
        <NavLink to="/create">
        <span className ="navBar">CREATE</span>
        </NavLink>

        <NavLink to="/explore">
        <span className="navBar">EXPLORE</span>
        </NavLink>
        
        {/* <img className="main-logo" width="55px" src={Squirtle}></img> */}

        <NavLink to="/go">
        <span className ="navBar">GO</span>
        </NavLink>

        { !user ?
        <NavLink to="/login">
        <span className ="navBar">LOG IN</span>
        </NavLink>
        : null}
        { user ?
        <NavLink to="/dashboard">
        <span className ="navBar">DASHBOARD</span>
        </NavLink>
        : null}
      </div>
    </React.Fragment>
  );
}
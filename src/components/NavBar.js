import React from "react";
import { NavLink } from "react-router-dom";
import { AddCircle, PinDrop, Explore, Input } from "@mui/icons-material";
import { Box } from "@mui/material";
import UpQuest from '../assets/UpQuest.png';

export default function NavBar({ user }) {
  return (
    <React.Fragment>
      <div className="navBar">
        <NavLink to="/create" button className='navLink'>
            <AddCircle sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
            CREATE
        </NavLink>

        <NavLink to="/explore" button className='navLink'>
        <Explore sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
          EXPLORE
        </NavLink>

        <img src={UpQuest} alt="Logo" width="200px"/>
        
        <NavLink to="/go" button className='navLink'>
        <PinDrop sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
          GO
        </NavLink>

        { !user ?
        <NavLink to="/login" button className='navLink'>
            <Input sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
            LOGIN
        </NavLink>
        : null}
        { user ?
        <NavLink to="/dashboard" button className='navLink'>
            <Input sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
            DASHBOARD
        </NavLink>
        : null}
      </div>
    </React.Fragment>
  );
}
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
            <AddCircle sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />{" "}
            CREATE
        </NavLink>
        <NavLink to="/explore" className='navLink'>
            <Explore sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
            EXPLORE
        </NavLink>
        <img src={UpQuest} alt="Logo" width="200px"/>

        <NavLink to="/go" className='navLink'>
            <PinDrop sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
            GO
        </NavLink>

        <NavLink to="/login" className='navLink'>
            <Input sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
            {user ? "DASHBOARD" : "LOG IN"}
        </NavLink>
      </div>
    </React.Fragment>
  );
}

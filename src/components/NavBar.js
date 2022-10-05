import React from "react";
import { NavLink } from "react-router-dom";
import { AddCircle, PinDrop, Explore, Input } from "@mui/icons-material";
import { Box } from "@mui/material";
import Squirtle from "../assets/squirtle.png";

export default function NavBar({ user }) {
  return (
    <React.Fragment>
      <Box>
        <NavLink to="/create">
          <span className="navBar">
            <AddCircle sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />{" "}
            CREATE
          </span>
        </NavLink>

        <NavLink to="/explore">
          <span className="navBar">
            <Explore sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
            EXPLORE
          </span>
        </NavLink>

        {/* <img className="main-logo" width="55px" src={Squirtle}></img> */}

        <NavLink to="/go">
          <span className="navBar">
            <PinDrop sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
            GO
          </span>
        </NavLink>

        <NavLink to="/login">
          <span className="navBar">
            <Input sx={{ verticalAlign: "middle", paddingBottom: "3px" }} />
            {user ? "DASHBOARD" : "LOG IN"}
          </span>
        </NavLink>
      </Box>
    </React.Fragment>
  );
}

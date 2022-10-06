import React from "react";
import { NavLink } from "react-router-dom";
import { AddCircle, PinDrop, Explore, Input } from "@mui/icons-material";
import UpQuest from "../assets/UpQuest.png";

export default function NavBar({ user }) {
  return (
    <React.Fragment>
      <ul className="navBar">
        <li>
          <NavLink to="/create" className="navLink" activeStyle={{
            background: "#ff0057"}}>
            <AddCircle sx={{ verticalAlign: "middle", marginRight:'5px'}} />
            CREATE
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore" className="navLink" activeStyle={{
            background: "#ff0057",
          }}>
            <Explore sx={{ verticalAlign: "middle", marginRight:'5px'}} />
            EXPLORE
          </NavLink>
        </li>
        <li>
          <img src={UpQuest} alt="Logo" height="100px" align-content="middle" padding-top="10px"/>
        </li>
        <li>
          <NavLink to="/go" className="navLink" activeStyle={{
            background: "#ff0057"}}>
            <PinDrop sx={{ verticalAlign: "middle", marginRight:'5px' }} />
            GO
          </NavLink>
        </li>
        <li>
          {!user ? ( 
            <NavLink to="/login" className="navLink" activeStyle={{
              background: "#ff0057"}}>
              <Input sx={{ verticalAlign: "middle", marginRight:'5px' }} />
              LOGIN
            </NavLink>
          ) : null}
          {user ? (
            <NavLink to="/dashboard" className="navLink" activeStyle={{
              background: "#ff0057"}}>
              <Input sx={{ verticalAlign: "middle", marginRight:'5px' }} />
              DASHBOARD
            </NavLink>
          ) : null}
        </li>
      </ul>
    </React.Fragment>
  );
}

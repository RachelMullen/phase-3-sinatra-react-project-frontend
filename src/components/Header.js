import React from "react";
import NavBar from "./NavBar";

export default function Header({ user }) {
  return (
    <React.Fragment>
      <header >
        <br />
        <NavBar user={user} />
        </header>
    </React.Fragment>
  );
}

import React from "react";
import NavBar from "./NavBar";

export default function Header({ user }) {
  return (
    <React.Fragment>
      <header>
        <br />
        <br />
        <NavBar user={user} />
        <br />
        <br />
      </header>
    </React.Fragment>
  );
}

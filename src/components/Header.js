import React from "react";
import NavBar from "./NavBar";

export default function Header({ user }) {
  return (
    <React.Fragment>
      <header>
        <NavBar user={user} />
        </header>
    </React.Fragment>
  );
}

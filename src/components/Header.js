import React from "react";
import NavBar from "./NavBar";
import Container from "@mui/material/Container";

export default function Header({ user }) {
  return (
    <React.Fragment>
      <Container>
      <header>
        <br />
        <br />
        <NavBar user={user} />
        <br />
        <br />
        </header>
      </Container>
    </React.Fragment>
  );
}

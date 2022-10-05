import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, AppBar } from "@mui/material";

import Header from "./Header";
import Create from "./Create";
import Explore from "./Explore";
import Go from "./Go";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

import "../index.css";

export default function App() {
  const [user, setUser ] = useState();
  const [ currentGame, setCurrentGame ] = useState();

  return (
    <React.Fragment>
      <Header user={user} />
      <Container
      sx={{
        flexGrow: 1,
        marginY: 5,
      }}>
      <Switch>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/go">
          <Go user={user} setCurrentGame={setCurrentGame} currentGame={currentGame} />
        </Route>
        <Route exact path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path="/">
          <Home user={user} setUser={setUser} />
        </Route>
        <Footer />
      </Switch>
      </Container>
      </React.Fragment>
  );
}

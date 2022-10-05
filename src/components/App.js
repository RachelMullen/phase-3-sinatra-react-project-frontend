import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

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

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:9292/users/${user.username}/${user.password}`)
        .then((resp) => resp.json())
        .then((data) => {
          setUser(data);
        });
    }
  },[currentGame])

  return (
    <div>
      <Header user={user} />
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
      </Switch>
      <Footer />
    </div>
  );
}

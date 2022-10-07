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
  const [ userHash, setUserHash ] = useState();

  useEffect(() => {
    fetch("http://localhost:9292/userhash")
    .then(resp => resp.json())
    .then(data => {setUserHash(data)});
  }, []);

  return (
    <div>
      <Header user={user} />
      <Switch>
        <Route exact path="/create">
          <Create user={user}/>
        </Route>
        <Route exact path="/explore">
          <Explore userHash={userHash} setCurrentGame={setCurrentGame} user={user} setUser={setUser}/>
        </Route>
        <Route exact path="/go">
          <Go userHash={userHash} setUser={setUser} user={user} setCurrentGame={setCurrentGame} currentGame={currentGame} />
        </Route>
        <Route exact path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path="/">
          <Home user={user} setUser={setUser} />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard setUser={setUser} user={user}/>
        </Route>
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Footer /> */}
    </div>
  );
}

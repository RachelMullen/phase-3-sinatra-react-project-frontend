import React, { useState } from "react";
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
  const [user, setUser] = useState();

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
          <Go user={user} />
        </Route>
        <Route exact path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route exact path="/">
          <Home setUser={setUser} />
        </Route>
        <Footer />
      </Switch>
    </div>
  );
}

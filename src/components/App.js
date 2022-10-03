import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import Create from "./Create";
import Explore from "./Explore";
import Go from "./Go";
import Home from './Home';
import Login from './Login';
import Footer from './Footer';

import "../index.css"

export default function App() {

  const [ users, setUsers ] = useState([]);
  const [currentUser, setCurrentUser ] = useState('')

  return (
  <div>
    <Header />
    <Switch>
        <Route exact path="/create">
            <Create />
        </Route>
        <Route exact path="/explore">
            <Explore />
        </Route>
        <Route exact path="/go">
            <Go />
        </Route>
        <Route exact path="/login">
            <Login
              onAddUser={(newUser)=>setUsers([...users, newUser])}
              onCurrentUser={(newUser)=>setCurrentUser(newUser)}
              currentUser={currentUser}/>
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
      <Footer />   
    </Switch>
  </div>
  );
}
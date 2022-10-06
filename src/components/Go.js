import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Squirtle from "../assets/squirtle.png";
import Map from "./Map";
import PlaceList from "./PlaceList";
import HuntList from "./HuntList";
import Comment from "./Comment";


export default function Go({ user, currentGame, setCurrentGame }) {
  const [isLoggedOut, setisLoggedOut] = useState(false);

  return (
    <React.Fragment>
      {/* redirect sign in */}
      <Dialog open={!user} onClose={() => setisLoggedOut(true)}>
        <DialogTitle>Please Log In Or Make An Account</DialogTitle>
        <DialogContent>
          <img src={Squirtle}></img>
        </DialogContent>
      </Dialog>

      {/* pop-up choose game */}
      {user ? (
        <Dialog open={!currentGame}>
          <DialogTitle>Please Select A Hunt</DialogTitle>
          <HuntList
            container={"go"}
            list={user[2]["in_progress"]}
            setCurrentGame={setCurrentGame}
          />
        </Dialog>
      ) : null}

      {/* {user ? (<p style={{ color: "black" }}>Current User is {user[0].username}</p>) : null} */}
      {/* {console.log("go huntlist:")}
      {console.log(user[2]["in_progress"])} */}
      {currentGame ? <PlaceList user={user} list={currentGame} /> : null}
      
      <div class="flexContainer">
        <div className="flexItemSmall"><Map list={currentGame} />
          <Comment />
          <HuntCard />
        </div>

        </div>
      {isLoggedOut ? <Redirect to="/" /> : null}
 
        </React.Fragment>

  );
}

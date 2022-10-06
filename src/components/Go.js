import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Squirtle from "../assets/squirtle.png";
import Map from "./Map";
import PlaceList from "./PlaceList";
import HuntList from "./HuntList";
import Comment from "./Comment";


export default function Go({ user, currentGame, setCurrentGame }) {
  const [ isLoggedOut, setisLoggedOut ] = useState(false)
  const [ redirect , setRedirect ] = useState("") 

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
      { user && user[2]["in_progress"].length > 1 ? 
      <Dialog open={!currentGame}>
        <DialogTitle>Please Select A Hunt</DialogTitle>
        <HuntList container={"go"} list={user[2]["in_progress"]} setCurrentGame={setCurrentGame}/>
      </Dialog>
      :
      <Dialog open={true} onClose={() => setRedirect("explore")}>
        <DialogTitle>YOU AREN'T ON ANY QUESTS!! Please Visit The Explore Or Create Page</DialogTitle>
        <DialogContent>
          <img src={Squirtle}></img>
        </DialogContent>
      </Dialog>
      }


      {/* {user ? (<p style={{ color: "black" }}>Current User is {user[0].username}</p>) : null} */}
      {/* {console.log("go huntlist:")}
      {console.log(user[2]["in_progress"])} */}
      {currentGame ? <PlaceList user={user} list={currentGame}/> : null}
      {currentGame ? <Map list={currentGame}/> : null}

      {isLoggedOut ? <Redirect to="/" /> : null}
      {redirect == "explore" ? <Redirect to="/explore" /> : null}
      
    </>
  );
}

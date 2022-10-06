import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PaperContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Squirtle from '../assets/squirtle.png';
import Map from './Map';
import PlaceList from './PlaceList';
import HuntList from './HuntList';


export default function Go({ user, currentGame, setCurrentGame }) {
  const [ isLoggedOut, setisLoggedOut ] = useState(false)
  const [ redirect , setRedirect ] = useState("")
  const [ isSelecting, setIsSelecting ] = useState(true)

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
      { user ? 
      <Dialog open={isSelecting} onClose={() => setIsSelecting(false)}>
        <DialogTitle>Please Select A Hunt</DialogTitle>
        <HuntList container={"go"} list={user[2]["in_progress"]} setCurrentGame={setCurrentGame}/>
        <Button onClick={() => setIsSelecting(false)}>Go!</Button>
      </Dialog>
      :
      <Dialog open={true} onClose={() => setRedirect("explore")}>
        <DialogTitle>YOU AREN'T ON ANY QUESTS!! Please Visit The Explore Or Create Page</DialogTitle>
        <DialogContent>
          <img src={Squirtle}></img>
        </DialogContent>
      </Dialog>
      }

      <div class="flexContainer">
      <div class='row'>
      <div class='column'>
          <div>
            <h2>PLACES IN HUNT</h2>
            <ul>
              <li>Blah blah blah</li>
            </ul>
            </div>
            </div> 
            <div class='double-column'>
          <div>
            <h2>TITLE OF HUNT</h2>
            <p>THIS IS WHERE THE PLACE DETAILS GO</p>
            <br />
            <button>EDIT/SAVE</button>
            </div>
            </div>
              <div class='column'>
          <div>
THIS IS THE MAP          </div>
      </div> 
        </div>
        </div>
          <div class="flexContainer">
        <div class='row'>
        <div class='column'> </div><div class='double-column'></div>
                  <div class='column'>
THIS SHOULD BE A COLUMN UNDER THE MAP
        </div>
              </div>
              </div>
      __________________________
      {/* {user ? (<p style={{ color: "black" }}>Current User is {user[0].username}</p>) : null} */}
      {/* {console.log("go huntlist:")}
      {console.log(user[2]["in_progress"])} */}
      {currentGame ? <PlaceList user={user} list={currentGame}/> : null}
      {currentGame ? <Map list={currentGame}/> : null}

      {isLoggedOut ? <Redirect to="/" /> : null}
      {redirect == "explore" ? <Redirect to="/explore" /> : null}
      </React.Fragment>
);
}

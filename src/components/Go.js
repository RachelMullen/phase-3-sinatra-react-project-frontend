import {
  Button,
  Grid,
  Typography,
  Paper,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Squirtle from '../assets/squirtle.png';
import Map from './Map';
import PlaceList from './PlaceList';
import HuntList from './HuntList';


export default function Go({ user, currentGame, setCurrentGame }) {
  const [ isRedirect, setIsRedirect ] = useState(false);

  const [ isLoggedOut, setisLoggedOut ] = useState(false)

  return (
    <>
      {/* redirect sign in */}
      <Dialog open={!user} onClose={() => setisLoggedOut(true)}>
        <DialogTitle>Please Log In Or Make An Account</DialogTitle>
        <DialogContent>
          <img src={Squirtle}></img>
        </DialogContent>
      </Dialog>

      {/* pop-up choose game */}
      { user ? 
      <Dialog open={!currentGame}>
        <DialogTitle>Please Select A Hunt</DialogTitle>
        <HuntList list={user[2]["in_progress"]} setCurrentGame={setCurrentGame}/>
      </Dialog>
      : null}


      {/* {user ? (<p style={{ color: "black" }}>Current User is {user[0].username}</p>) : null} */}
      {currentGame ? <PlaceList user={user} list={currentGame}/> : null}
      <Map list={currentGame}/>

      {isLoggedOut ? <Redirect to="/" /> : null}
    </>
  );
}

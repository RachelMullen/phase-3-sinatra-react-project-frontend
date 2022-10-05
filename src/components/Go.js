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
  const [ isRedirect, setIsRedirect ] = useState(false);


  return (
    <>
      {/* redirect sign in */}
      <Dialog open={!user} onClose={() => setIsRedirect(true)}>
        <DialogTitle>Please Log In Or Make An Account</DialogTitle>
        <DialogContent>
          <img src={Squirtle}></img>
        </DialogContent>
      </Dialog>

      {/* redirect sign in */}
      <Dialog open={!currentGame && user} onClose={() => setIsRedirect(true)}>
        <DialogTitle>Please Select A Hunt</DialogTitle>
        <HuntList list={user[2]["in_progress"]} setCurrentGame={setCurrentGame}/>
      </Dialog>

      {user ? (<p style={{ color: "black" }}>Current User is {user[0].username}</p>) : null}
      <PlaceList user={user} list={currentGame}/>
      <Map />

      {isRedirect ? <Redirect to="/" /> : null}
    </>
  );
}

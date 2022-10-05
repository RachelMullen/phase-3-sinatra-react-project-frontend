<<<<<<< HEAD
import React from "react";
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
=======
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
<<<<<<< HEAD
  const [ isRedirect, setIsRedirect ] = useState(false);

>>>>>>> 39b9a73011e2e9073ff0224d1667c1c56806b7ad
=======
  const [ isLoggedOut, setisLoggedOut ] = useState(false)
>>>>>>> 50ca605e8479964c4617024fee98eb2daf1b3864

  return (
<<<<<<< HEAD
    <React.Fragment>
      <Box>
        {user ? (
          <p style={{ color: "black" }}>Current User is {user.username}</p>
        ) : null}
      </Box>
      <Grid container spacing={3}>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              textAlign: "left",
              padding: "5px",
              width: 300,
              height: 300,
              backgroundColor: "secondary.dark",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography color="white" variant="h4">
              PLACES IN HUNT
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <img
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
            alt="Google Map"
            width="300px"
            height="auto"
          />
          <br />
          <Button variant="contained">EDIT/SAVE</Button>
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            sx={{
              width: 300,
              height: 300,
              padding: "5px",
              backgroundColor: "secondary.dark",
              "&:hover": {
                backgroundColor: "secondary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography color="white" variant="h4" textAlign="Center">
              PLACES IN HUNT
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <br />
      <Box>
        <center>
          <Button variant="contained">PUBLISH & GO!</Button>
        </center>
      </Box>
    </React.Fragment>
=======
    <>
      {/* redirect sign in */}
      <Dialog open={user != [{},{},{},{}]} onClose={() => setisLoggedOut(true)}>
        <DialogTitle>Please Log In Or Make An Account</DialogTitle>
        <DialogContent>
          <img src={Squirtle}></img>
        </DialogContent>
      </Dialog>

      {/* pop-up choose game */}
      { user ? 
      <Dialog open={!currentGame && user == [{},{},{},{}]}>
        <DialogTitle>Please Select A Hunt</DialogTitle>
        <HuntList list={user[2]["in_progress"]} setCurrentGame={setCurrentGame}/>
      </Dialog>
      : null}

      {user ? (<p style={{ color: "black" }}>Current User is {user[0].username}</p>) : null}
      <PlaceList user={user} list={currentGame}/>
      <Map currentGame={currentGame}/>

      {isLoggedOut ? <Redirect to="/" /> : null}
    </>
>>>>>>> 39b9a73011e2e9073ff0224d1667c1c56806b7ad
  );
}

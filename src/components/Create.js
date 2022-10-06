import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Paper,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import GoogleMapTA from "../assets/GoogleMapTA.jpg";
// import Comment from "./Comment";
// import HuntCard from ".HuntCard";
// import HuntList from ".HuntList";
// import PlaceCard from ".PlaceCard";
// import PlaceList from ".PlaceList";
// import PlaceFull from ".PlaceFull";

export default function Create() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <button className="medium-button" onClick={handleClickOpen}>
        CREATE A HUNT
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>CREATE A HUNT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add the information below to create a new hunt.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" Location"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" Desription"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Create</button>
        </DialogActions>
      </Dialog>
      <div class="flexContainer">
        <div className="flexItemSmall">
          <div>
            <h2>PLACES IN HUNT</h2>
            <ul>
              <li>Blah blah blah</li>
            </ul>
          </div>
        </div>
        <div className="flexItemLarge">
          <div>
            <h2>TITLE OF HUNT</h2>
            <p>THIS IS WHERE THE PLACE DETAILS GO</p>
            <br />
            <button>EDIT/SAVE</button>
          </div>
        </div>
        <div className="flexItemSmall">
          <div>
            <img src={GoogleMapTA} alt="Logo" max-width="100%" height="100px" />
          </div>
        </div>
      </div>

      <div>
        <button className="large-button">PUBLISH & GO!</button>
      </div>
    </React.Fragment>
  );
}

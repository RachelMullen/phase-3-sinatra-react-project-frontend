import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PaperContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";

export default function Home({ user, setUser }) {
  const [userInput, setUserInput] = useState(["", ""]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  fetch(`http://localhost:9292/users/${userInput[0]}`)
    .then((resp) => resp.json())
    .then((data) => {
      setUser(data);
      setUserInput(["", ""]);
    });

  return (
    <React.Fragment>
      <h1>Welcome trackies*,</h1>
      <p>
      <strong>Tracky</strong> is a one-stop shop to organize your experiences.
      Save your favorite places, explore location collections, and track your gallops all in one spot. 
      </p>
      
      <div>
        <Button onClick={handleClickOpen}>
          SIGN UP
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>SIGN UP</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add the information below to create a new hunt.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={userInput[0]}
              onChange={(e) => setUserInput([e.target.value, userInput[1]])}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              value={userInput[1]}
              onChange={(e) => setUserInput([userInput[0], e.target.value])}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Sign Up</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <p>
          Already have an account?{" "}
          <strong>
            <a href="http://localhost:3000/login">Log In.</a>
          </strong>
        </p>
        {/* <p>
          <Button variant="contained" onClick={user ? <Redirect to="/go" /> : null}>
            LOG IN
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>LOGIN IN</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Add the information below to create a new hunt.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                value={userInput[0]}
                onChange={(e) => setUserInput([e.target.value, userInput[1]])}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                value={userInput[1]}
                onChange={(e) => setUserInput([userInput[0], e.target.value])}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={user ? <Redirect to="/dashboard" /> : null}>
                Log In
              </Button>
            </DialogActions>
          </Dialog>
        </p> */}
      </div> 
      
    </React.Fragment>
  );
}

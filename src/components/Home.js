import React, { useState } from "react";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";
import {
  Button,
  Box,
  Grid,
  Typography,
  Paper,
  PaperContent,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
=======
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
>>>>>>> 39b9a73011e2e9073ff0224d1667c1c56806b7ad

export default function Home({ setUser, user }) {
  const [userInput, setUserInput] = useState(["","",""]);
  const [open, setOpen] = useState(false);
  
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleSignUp = () => {

    if (userInput[1] == userInput[2]) {

      let userObj = {
        "username": userInput[0],
        "password": userInput[1],
      }
  
      fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      })
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data)
        setUserInput(["","",""])
      });
  
    } else {
      alert("Please make sure passwords match!");
      setUserInput([userInput[0],"",""]);
    }
  };

  return (
    <React.Fragment>
      <h1>Welcome trackies*,</h1>
      <p>
        <strong>Tracky</strong> is a one-stop shop to organize your experiences.
        Save your favorite places, explore location collections, and track your
        gallops all in one spot.
      </p>

      <div>
        <Button onClick={handleClickOpen}>SIGN UP</Button>
        <Dialog open={open} onClose={handleSignUp}>
          <DialogTitle>SIGN UP</DialogTitle>
          <DialogContent>
<<<<<<< HEAD
            <DialogContentText>Sign up for an account.</DialogContentText>
=======
            <DialogContentText>
              Make an account and get galloping.
            </DialogContentText>
>>>>>>> 39b9a73011e2e9073ff0224d1667c1c56806b7ad
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              type="email"
              fullWidth
              variant="standard"
              value={userInput[0]}
              onChange={(e) => setUserInput([e.target.value, userInput[1], userInput[2]])}
            />
            <TextField
              margin="dense"
              id="password1"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              value={userInput[1]}
              onChange={(e) => setUserInput([userInput[0], e.target.value, userInput[2]])}
            />
            <TextField
              margin="dense"
              id="password2"
              label="Re-Enter Password"
              type="password"
              fullWidth
              variant="standard"
              value={userInput[2]}
              onChange={(e) => setUserInput([userInput[0], userInput[1], e.target.value])}
            />
          </DialogContent>
          <DialogActions>
<<<<<<< HEAD
            <Button onClick={user ? <Redirect to="/go" /> : null}>
              Sign Up
            </Button>
=======
            <Button onClick={handleSignUp}>Sign Up</Button>
>>>>>>> 39b9a73011e2e9073ff0224d1667c1c56806b7ad
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
      </div>
      {user ? <Redirect to="/go" /> : null}
    </React.Fragment>
  );
}

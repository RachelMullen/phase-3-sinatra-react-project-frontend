import React, { useState } from "react";
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
            <DialogContentText>Sign up for an account.</DialogContentText>
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
            <Button onClick={user ? <Redirect to="/go" /> : null}>
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
<<<<<<< HEAD
      </Box>
      <Box>
        Already have an account?{" "}
        {/* <strong>
            <a href="http://localhost:3000/login">Log In.</a>
          </strong> */}
      </Box>
      <Box>
        <Button variant="contained" onClick={handleClickOpen}>
          LOG IN
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>LOG IN</DialogTitle>
          <DialogContent>
            <DialogContentText>Log in to your account.</DialogContentText>
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
      </Box>
=======
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
      
>>>>>>> 19c8e1fa47ffef272119d5d84393e3aebe281cf7
    </React.Fragment>
  );
}

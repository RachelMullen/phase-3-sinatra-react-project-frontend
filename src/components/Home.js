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
      <h1>TRACK YOUR FUN</h1>
      <p>
        <em>A list-based app to track your fun!</em>{" "}
      </p>
      <p>Welcome, please sign in or create an account you absolute clown!</p>
      <div>
        <Button variant="contained" onClick={handleClickOpen}>
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
          {/* <strong>
            <a href="http://localhost:3000/login">Log In.</a>
          </strong> */}
        </p>
        <p>
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
        </p>
      </div>
    </React.Fragment>
  );
}

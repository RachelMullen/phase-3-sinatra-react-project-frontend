import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

export default function Home({ setUser, user }) {
  const [userInput, setUserInput] = useState(["", "", ""]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSignUp = () => {
    if (
      userInput[1] == userInput[2] &&
      userInput[0] !== "" &&
      userInput[1] !== "" &&
      userInput[2] !== ""
    ) {
      let userObj = {
        username: userInput[0],
        password: userInput[1],
      };

      fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUser(data);
          setUserInput(["", "", ""]);
        });
    } else if (userInput[1] !== userInput[2]) {
      alert("Please make sure passwords match!");
      setUserInput([userInput[0], "", ""]);
    } else if (userInput[1] === "" && userInput[2] === "") {
      setOpen(false);
    }
  };

  return (
    <React.Fragment>
      <body className="main-container">
        <div className="home">
          <h1>Welcome trackies*.</h1>
          <p>
            <strong>UpQuest</strong> is a one-stop shop to organize your
            experiences. Save your favorite places, explore location
            collections, and track your gallops all in one spot.
          </p>
          <p>
            <ExploreOutlinedIcon sx={{ fontSize: "large" }} />
          </p>
          <div>
            <button className="medium-button" onClick={handleClickOpen}>
              SIGN UP
            </button>
            <Dialog open={open} onClose={handleSignUp}>
              <DialogTitle>SIGN UP</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Make an account and get galloping.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="username"
                  label="Username"
                  type="email"
                  fullWidth
                  variant="standard"
                  value={userInput[0]}
                  onChange={(e) =>
                    setUserInput([e.target.value, userInput[1], userInput[2]])
                  }
                />
                <TextField
                  margin="dense"
                  id="password1"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  value={userInput[1]}
                  onChange={(e) =>
                    setUserInput([userInput[0], e.target.value, userInput[2]])
                  }
                />
                <TextField
                  margin="dense"
                  id="password2"
                  label="Re-Enter Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  value={userInput[2]}
                  onChange={(e) =>
                    setUserInput([userInput[0], userInput[1], e.target.value])
                  }
                />
              </DialogContent>
              <DialogActions>
                <button onClick={handleSignUp}>SIGN UP</button>
              </DialogActions>
            </Dialog>
          </div>
          <div>
            <p>
              Already have an account?
              <strong>
                <a href="http://localhost:3000/login">Log In.</a>
              </strong>
            </p>
          </div>
        </div>
      </body>
      {user ? <Redirect to="/" /> : null}
    </React.Fragment>
  );
}

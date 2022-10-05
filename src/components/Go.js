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


export default function Go({ user }) {
  const [ isRedirect, setIsRedirect ] = useState(false);


  return (
    <React.Fragment> 
      <Dialog open={!user} onClose={() => setIsRedirect(true)}>
        <DialogTitle>Please Log In Or Make An Account</DialogTitle>
        <DialogContent>
          <img src={Squirtle}></img>
        </DialogContent>
      </Dialog>

      {user ? (<p style={{ color: "black" }}>Current User is {user[0].username}</p>) : null}
      <Container sx={{ flexGrow: 1 }}>
        <Grid2
          container
          spacing={{ xs: 3, md: 4 }}
          columns={{ xs: 6, sm: 10, md: 14 }}
        >
          <Grid2 xs>
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
              <PaperContent>
                <Typography color="white" variant="h4">
                  PLACES IN HUNT
                </Typography>
              </PaperContent>
            </Paper>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <Typography color="white" variant="h4" textAlign="center">
              THIS IS WHERE THE MAP GOES
            </Typography>
            <Button variant="contained">EDIT/SAVE</Button>
          </Grid2>
          <Grid2 xs>
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
              <PaperContent>
                <Typography color="white" variant="h4" textAlign="Center">
                  PLACES IN HUNT
                </Typography>
              </PaperContent>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
      <div>
        <br />
        <Button variant="contained">PUBLISH & GO!</Button>
      </div>
      {isRedirect ? <Redirect to="/" /> : null}
    </React.Fragment>
  );
}

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

export default function Go({ user }) {
  return (
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
  );
}

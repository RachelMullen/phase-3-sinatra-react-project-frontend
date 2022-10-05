import React from "react";
import { Button, Grid, Typography, Paper, Box, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";


export default function Explore() {
  return (
    <React.Fragment>
        <Grid
          container
          spacing={3}
        >
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
                  PLACES ON YOUR HUNT
                </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Typography color="black" variant="h4" textAlign="center">
              HI USERNAME! HUNTS
            </Typography>
            <Button variant="contained">EDIT/SAVE</Button>
          </Grid>
           <Grid item>
            <img
              src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg'
              alt="Google Map" width= "400px" height= "auto"/>
          </Grid>
        </Grid>
      <Box>
        <br />
        <Button variant="contained">PUBLISH & GO!</Button>
      </Box>
    </React.Fragment>
  );
}

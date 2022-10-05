import React from "react";
<<<<<<< HEAD
import { Button, Grid, Typography, Paper, Box, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

=======
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PaperContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import Map from './Map';
>>>>>>> d82b0dc1f4a7fd2c0fd2ccb6c86c8a12d00c8b30

export default function Explore() {
  return (
    <React.Fragment>
<<<<<<< HEAD
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
=======


      <Map />









      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container sx={{ flexGrow: 1 }}>
          <Grid2 xs={12} sm={6}>
            <Button variant="contained">EDIT/SAVE</Button>
          </Grid2>
      </Container>
      <div>
>>>>>>> d82b0dc1f4a7fd2c0fd2ccb6c86c8a12d00c8b30
        <br />
        <Button variant="contained">PUBLISH & GO!</Button>
      </Box>
    </React.Fragment>
  );
}

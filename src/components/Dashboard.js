import React from "react";
import { Button, Grid, Typography, Paper, Box, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";


export default function Dashboard({ user }) {

  return (
    <React.Fragment>
<<<<<<< HEAD
        <Grid
          container
          spacing={5}
        >
          <Grid item xs>
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
                  FAVORITES/WISHLIST/IN PROGRESS
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="white" variant="h4" textAlign="center">
              HI USERNAME! THIS IS WHERE THE CURRENT HUNT IS
            </Typography>
            <Button variant="contained">EDIT/SAVE</Button>
          </Grid>
          <Grid item xs>
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
                  THIS IS WHERE THE STATS GO
                </Typography>
            </Paper>
          </Grid>
        </Grid>
      <Box>
        <Button variant="contained">PUBLISH & GO!</Button>
      </Box>
=======
      <h1>{user[0].username}</h1>
      <h1>Score: {user[3].stats.score}{user[3].stats.score > 0 ? ", nice." : ", you fucking idiot."}</h1>
>>>>>>> d82b0dc1f4a7fd2c0fd2ccb6c86c8a12d00c8b30
    </React.Fragment>
  );
}

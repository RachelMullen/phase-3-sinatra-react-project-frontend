import React from "react";
import { Button, Grid, Typography, Paper, Box, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";


export default function Dashboard() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

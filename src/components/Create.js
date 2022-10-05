import React, { useState } from "react";
import { Button, Grid, Typography, Paper, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box } from "@mui/material";

export default function Create() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Box>
        <Button variant="contained" onClick={handleClickOpen}>
          CREATE A HUNT
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>CREATE A HUNT</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add the information below to create a new hunt.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label=" Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label=" Location"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label=" Desription"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Create</Button>
          </DialogActions>
        </Dialog>
      </Box>
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
                  PLACES IN HUNT
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="black" variant="h4" textAlign="center">
              THIS IS WHERE THE PLACE DETAILS GO
            </Typography>
            <Button variant="contained">EDIT/SAVE</Button>
          </Grid>
          <Grid item xs>
            <img
              src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg'
              alt="Google Map" width= "300px" height= "auto"/>
          </Grid>
        </Grid>
      <Box>
        <Button variant="contained">PUBLISH & GO!</Button>
      </Box>
    </React.Fragment>
  );
}

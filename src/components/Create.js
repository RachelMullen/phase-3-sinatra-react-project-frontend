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
      <div>
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
      </div>

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
              TITLE OF HUNT THIS IS WHERE THE PLACE DETAILS GO
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
                  THIS IS A SMALLER MAP
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
    </React.Fragment>
  );
}

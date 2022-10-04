import React from "react";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PaperContent from "@mui/material/CardContent";
// import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";

export default function Explore() {
  return (
    <React.Fragment>
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
                  PLACES ON YOUR HUNT
                </Typography>
              </PaperContent>
            </Paper>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <Typography color="white" variant="h4" textAlign="center">
              HI USERNAME! HUNTS
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
                  MAP{" "}
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

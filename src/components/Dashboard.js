import React from "react";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PaperContent from "@mui/material/CardContent";
// import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";

export default function Dashboard({ user }) {

  return (
    <React.Fragment>
      <h1>{user[0].username}</h1>
      <h1>Score: {user[3].stats.score}{user[3].stats.score > 0 ? ", nice." : ", you fucking idiot."}</h1>
    </React.Fragment>
  );
}

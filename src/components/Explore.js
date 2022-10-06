import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PaperContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import Map from './Map';
import HuntList from './HuntList';

export default function Explore({ user, setCurrentGame }) {
  const [ publicHunts, setPublicHunts ] = useState();

  useEffect(() => {
  fetch("http://localhost:9292/public")
  .then(resp => resp.json())
  .then(data => {
    setPublicHunts(data);
    console.log("public hunts:")
    console.log(data);
  });
  },[]);

  return (
    <React.Fragment>
      <HuntList setCurrentGame={setCurrentGame} user={user} container={"explore"} list={publicHunts}/>
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
        <Grid xs={12} sm={6}>
          <button variant="contained">EDIT/SAVE</button>
        </Grid>
      <div>
        <br />
        <button className="large-button">PUBLISH & GO!</button>
      </div>
    </React.Fragment>
  );
}

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import PaperContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Squirtle from "../assets/squirtle.png";
import Map from "./Map";
import PlaceList from "./PlaceList";
import HuntList from "./HuntList";

export default function Go({ user, currentGame, setCurrentGame }) {
  const [isLoggedOut, setisLoggedOut] = useState(false);
  const [redirect, setRedirect] = useState("");
  const [isSelecting, setIsSelecting] = useState(true);
  const [pinArray, setPinArray] = useState([]);
  const [center, setCenter] = useState({
    lat: 39.7392,
    lng: -104.9902,
  });

  useEffect(() => setPinArray(grabAllCoordinates()), [currentGame]);

  function grabAllCoordinates() {
    if (currentGame) {
      console.log("attempting to parse list of places");
      console.log(currentGame);
      let staging = [];
      let centerMath = [0, 0];
      let name = Object.keys(currentGame);
      currentGame[name].map((place) => {
        staging.push({
          latitude: `${place[0].place.latitude}`,
          longitude: `${place[0].place.longitude}`,
          complete: `${place[1].linked_visit[0].complete}`,
          favorite: `${place[1].linked_visit[0].favorite}`,
          wishlist: `${place[1].linked_visit[0].wishlist}`,
          avoid: `${place[1].linked_visit[0].avoid}`,
        });
        centerMath[0] += place[0].place.latitude;
        centerMath[1] += place[0].place.longitude;
      });
      centerMath[0] = centerMath[0] / currentGame[name].length;
      centerMath[1] = centerMath[1] / currentGame[name].length;
      setCenter({
        lat: centerMath[0],
        lng: centerMath[1],
      });
      return staging;
    }
  }

  return (
    <React.Fragment>
      {" "}
      {/* redirect sign in */}
      <Dialog open={!user} onClose={() => setisLoggedOut(true)}>
        <DialogTitle>Please Log In Or Make An Account</DialogTitle>
        <DialogContent>
          <img src={Squirtle}></img>
        </DialogContent>
      </Dialog>
      {/* pop-up choose game */}
      {user ? (
        <Dialog open={isSelecting} onClose={() => setIsSelecting(false)}>
          <DialogTitle>Please Select A Hunt</DialogTitle>
          <HuntList
            container={"go"}
            list={user[2]["in_progress"]}
            setCurrentGame={setCurrentGame}
          />
          <Button onClick={() => setIsSelecting(false)}>Go!</Button>
        </Dialog>
      ) : (
        <Dialog open={true} onClose={() => setRedirect("explore")}>
          <DialogTitle>No Active Quests</DialogTitle>
          <DialogContent>
            <img src={Squirtle}></img>
            <br />
            Go explore, then make an account.
          </DialogContent>
        </Dialog>
      )}
      {currentGame ? <PlaceList user={user} list={currentGame} /> : null}
      {currentGame ? (
        <Map center={center} pinArray={pinArray} list={currentGame} />
      ) : null}
      {isLoggedOut ? <Redirect to="/" /> : null}
      {redirect == "explore" ? <Redirect to="/explore" /> : null}
      <div class="flexContainer">
        <div class="row">
          <div class="column">
            <div>
              <h2>PLACES IN HUNT</h2>
              <ul>
                <li>Paces</li>
                <li>Paces</li>
                <li>Paces</li>
                <li>Paces</li>
                <li>Paces</li>
                <li>Paces</li>
              </ul>
            </div>
          </div>
          <div class="double-column">
            <div>
              TITLE OF HUNT THIS IS WHERE THE PLACE DETAILS GO
              <br />
              <button>EDIT/SAVE</button>
            </div>
          </div>
          <div class="column">
            <div>THIS IS THE MAP </div>
          </div>
        </div>
      </div>
      <div class="flexContainer">
        <div class="row">
          <div class="column"> </div>
          <div class="double-column"></div>
          <div class="column">THESE ARE THE COMMENTS</div>
        </div>
      </div>
    </React.Fragment>
  );
}

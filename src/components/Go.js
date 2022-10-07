import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Squirtle from "../assets/squirtle.png";
import Map from "./Map";
import PlaceList from "./PlaceList";
import HuntList from "./HuntList";

export default function Go({ userHash, setUser, user, currentGame, setCurrentGame }) {
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

  // RENDERING
  return (
    <div className="go-page">
      {/* redirect sign in */}
      <Dialog open={!user} onClose={() => setisLoggedOut(true)}>
        <DialogTitle>Please Log In Or Make An Account</DialogTitle>
        <DialogContent>
          <img src={Squirtle}></img>
        </DialogContent>
      </Dialog>

      {/* CHOOSING GAME */}
      {user ? (
        <Dialog
          id="go-selector"
          className="pop"
          open={isSelecting}
          onClose={() => setIsSelecting(false)}
        >
          <DialogTitle>Please Select An Active Quest:</DialogTitle>
          <HuntList
            container={"go"}
            list={user[2]["in_progress"]}
            setCurrentGame={setCurrentGame}
          />
          <Button onClick={() => setIsSelecting(false)}>Go!</Button>
        </Dialog>
      ) : (
        <Redirect to="/" />
      )}

      {currentGame ? (
        <PlaceList userHash={userHash} setUser={setUser} user={user} list={currentGame} />
      ) : null}
      {currentGame ? (
        <Map center={center} pinArray={pinArray} list={currentGame} />
      ) : null}

      {isLoggedOut ? <Redirect to="/" /> : null}
      {redirect == "explore" ? <Redirect to="/explore" /> : null}
    </div>
  );
}

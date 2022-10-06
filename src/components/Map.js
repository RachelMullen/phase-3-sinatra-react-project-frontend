import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { v4 as uuid } from "uuid";

export default function Map({ list }) {
  const [pinArray, setPinArray] = useState([]);

  useEffect(() => setPinArray(grabAllCoordinates()), [list]);

  function grabAllCoordinates() {
    if (list) {
      console.log("attempting to parse list of places")
      console.log(list)
      let staging = [];
      let name = Object.keys(list);
      list[name].map((place) => {
        staging.push({
          latitude: `${place[0].place.latitude}`,
          longitude: `${place[0].place.longitude}`,
          complete: `${place[1].linked_visit[0].complete}`,
          favorite: `${place[1].linked_visit[0].favorite}`,
          wishlist: `${place[1].linked_visit[0].wishlist}`,
          avoid: `${place[1].linked_visit[0].avoid}`,
        });
      });
      return staging;
    }
  }

//   let trip = [
//     {
//         latitude: 39.7382,
//         longitude: -104.9902,
//         complete: false,
//         favorite: false,
//         wishlist: false,
//         avoid: true
//     },
//     {
//         latitude: 39.7392,
//         longitude: -104.9922,
//         complete: false,
//         favorite: true,
//         wishlist: false,
//         avoid: true
//     },
//     {
//         latitude: 39.7372,
//         longitude: -104.9912,
//         complete: false,
//         favorite: true,
//         wishlist: false,
//         avoid: false
//     }
// ]

  // handles the view region
  const [center, setCenter] = useState({
    lat: 39.7392,
    lng: -104.9902,
  });

  // handles what icon appears
  function determineIcon(visit) {
    console.log(visit);
    if (visit.avoid == true) {
      return "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    } else if (visit.favorite == true) {
      return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
    } else if (visit.wishlist == true) {
      return "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    } else {
      return "http://maps.google.com/mapfiles/ms/icons/green.png";
    }
  }

  console.log("console logging pinArray");
  console.log(pinArray);

  const containerStyle = {
    height: "90vh",
    width: "60%",
    left: "275px",
  };
  const settings = {
    disableDefaultUI: true,
    zoomControls: true,
  };

  // console.log(pinArray);

  return (
    <div id="mapContainer">
      {pinArray ?
      <LoadScript
        id="map"
        googleMapsApiKey="AIzaSyBU05O2xt-HlE4y5SUo0tHnCB0WcUi6Rk4"
        mapId="d7d3b3829ba8148c"
      >
        <GoogleMap
          // onClick={recenter}
          mapContainerStyle={containerStyle}
          zoom={13.5} //gotta come up with a formula for a dynamic zoom that adjusts every time a pin is placed
          center={center}
          options={settings}
        >
          {pinArray.map((visit) => (
            <Marker
              id="marker"
              key={uuid()}
              position={{
                lat: parseFloat(visit.latitude),
                lng: parseFloat(visit.longitude),
              }}
              icon={determineIcon(visit)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      : null}
    </div>
  );
}
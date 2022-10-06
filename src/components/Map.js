import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { v4 as uuid } from "uuid";

export default function Map({ pinArray, center }) {
  // console.log("center is")
  // console.log(center)

  //THIS FUCKING STAYS HERE MATE. SHE DOESNT GO.
  function determineIcon(visit) {
    // console.log("logging visit")
    // console.log(visit);
    // console.log(visit.wishlist)
    if (visit.avoid == true) {
      // console.log("avoid is true for" + visit + "the test value is" +  visit["avoid"])
      return "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    } else if (visit.favorite == true) {
      // console.log("favorite is true for" + visit + "the test value is" + visit.favorite)
      return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
    } else if (visit.wishlist == true) {
      // console.log("wishlist is true for" + visit + "the test value is" +  visit.wishlist)
      return "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    } else {
      // console.log("none of the above are true for" + "the test value is" +  visit)
      return "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    }
  }

  // console.log("console logging pinArray");
  // console.log(pinArray);

  const containerStyle = {
    height: "90vh",
    width: "60%",
    left: "275px",
  };
  const settings = {
    disableDefaultUI: true,
    zoomControls: true,
  };

  return (
    <div className="column">
      <div>
        MAP
        <div id="mapContainer">
          {pinArray ? (
            <LoadScript
              id="map"
              googleMapsApiKey="AIzaSyBU05O2xt-HlE4y5SUo0tHnCB0WcUi6Rk4"
              mapId="d7d3b3829ba8148c"
            >
              <GoogleMap
                // onClick={recenter}
                mapContainerStyle={containerStyle}
                zoom={10} //gotta come up with a formula for a dynamic zoom that adjusts every time a pin is placed
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
          ) : null}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';

export default function Map ({ list }) {
  let coords = [];

  function grabAllCoordinates () {
    if (list) {
      let name = Object.keys(list)
        list[name].map(place => {
          coords.push([place[0].place.latitude, place[0].place.longitude]);
        })
    }
}

grabAllCoordinates();

console.log(coords)

  const containerStyle = {
    height: '90vh',
    width: '60%',
    left: "275px",
  };
  const settings = {
      disableDefaultUI: true,
      zoomControls: true,
  }
  const center = {
      lat: 39.7392,
      lng: -104.9902,
  }

  let trip=[{lat: 40.0, lng: -105.0},
    {lat: 40.0, lng: -104.0},
    {lat: 40.0, lng: -103.0},
    {lat: 40.0, lng: -102.0},
    {lat: 40.0, lng: -101.0}]
    
  return (
    <div id="mapContainer">
      <LoadScript id ="map" googleMapsApiKey="AIzaSyBU05O2xt-HlE4y5SUo0tHnCB0WcUi6Rk4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={13.5} //gotta come up with a formula for a dynamic zoom that adjusts every time a pin is placed
          center={center}
          options={settings}
        >
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
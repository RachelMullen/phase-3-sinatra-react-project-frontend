import React, { useState } from 'react'
​
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';
​
export default function Map () {
​
  
  // fetch (`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+denver+colorado&key=AIzaSyBU05O2xt-HlE4y5SUo0tHnCB0WcUi6Rk4`)
  // .then( res => res.json )
  // .then( res => visits(setSelected))
​
  // function visits(data) {
  //   data.map((visit) => ({
  //     key : visit.results.place_id,
  //     position : {lat: visit.results.geometry.lat, lng: visit.results.geometry.lng},
  //     icon : {
  //       url: visit.results.icon,
  //       scaledSize: new window.google.maps.Size(30,30),
  //       origin: new window.google.maps.Point(0,0),
  //       anchor: new window.google.maps.Point(15,15),
  //     }
  // })
  //   )
  // }
  // function visits(data){
  //   return trip = [...data]
  // }
​
  // const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
​
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
  // const bestCenter = {
  //   lat: all marker lat's combined and then divided by /array.length -1
  //   long: all marker long's combined then divided by /array.length -1
  // mighthave to use effect pn the fetch so the state updates everytime a marker is placed, specific to the create page prolly doesn't need to exist anywhere else
  // }
  let trip=[{lat: 40.0, lng: -105.0},
    {lat: 40.0, lng: -104.0},
    {lat: 40.0, lng: -103.0},
    {lat: 40.0, lng: -102.0},
    {lat: 40.0, lng: -101.0}]
​
console.log (trip[0])
​
// google.maps.event.addListener(map, "click", (event) => {
//   addMarker(event.latLng, map);
// });
​
// function addMarker(location: google.maps.LatLngLiteral, map: google.maps.Map) {
//   // Add the marker at the clicked location, and add the next-available label
//   // from the array of alphabetical characters.
//   new google.maps.Marker({
//     position: location,
//     label: labels[labelIndex++ % labels.length],
//     map: map,
//   });
// }
​
​
​
  return (
    <div id="mapContainer">
      <LoadScript id ="map" googleMapsApiKey="AIzaSyBU05O2xt-HlE4y5SUo0tHnCB0WcUi6Rk4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={13.5} //gotta come up with a formula for a dynamic zoom that adjusts every time a pin is placed
          center={center}
          options={settings}
        >
              {trip.map((visit) => 
                <Marker
                    id="marker"
                    // key={visit.id}
                    position= {{lat: parseFloat(visit.lat), lng: parseFloat(visit.lng)}}
                    
                  />
               )}
            
       
        {/* {selected ? (
        <InfoWindow position={{ lat: parseFloat(selected.latitude), lng: parseFloat(selected.longitude)}} onCloseClick={()=>{setSelected(null)}} >
            <div>
                <h2>{selected.fullName}</h2>
                <h3>{selected.designation}</h3>
                <p>{selected.description}</p>
            </div>
        </InfoWindow>
        ) : null} */}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
​
​
// {parks.map((marker)=> (
//   <Marker
//       id="marker"
//       key={marker.id}
//       position={{lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude)}}
//       icon={{
//         url: marker.images[0].url,
//         scaledSize: new window.google.maps.Size(30,30),
//         origin: new window.google.maps.Point(0,0),
//         anchor: new window.google.maps.Point(15,15),
//       }}
//       onClick={()=>{
//           setSelected(marker);
//       }}
​
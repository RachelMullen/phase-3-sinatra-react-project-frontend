// import React, { useState } from 'react'

// import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';

export default function Map () {

  const [center, setCenter] =useState({
    lat: 39.7392,
    lng: -104.9902,
  })

  let trip = [
    {
        latitude: 39.7382,
        longitude: -104.9902,
        complete: false,
        favorite: false,
        wishlist: false,
        avoid: true
    },
    {
        latitude: 39.7392,
        longitude: -104.9922,
        complete: false,
        favorite: true,
        wishlist: false,
        avoid: true
    },
    {
        latitude: 39.7372,
        longitude: -104.9912,
        complete: false,
        favorite: true,
        wishlist: false,
        avoid: false
    }
]

  // const containerStyle = {
  //   height: '90vh',
  //   width: '60%',
  //   left: "275px",
  // };
  // const settings = {
  //     disableDefaultUI: true,
  //     zoomControls: true,
  // }

      // console.log(trip)

      // console.log(pleaseWork(trip))

    // function determineIcon(visit){
      
    //   if (visit.avoid==true) {
    //     return "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    //   } else if (visit.favorite==true) {
    //     return "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
    //   } else if (visit.wishlist==true) {
    //     return "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    //   }
    //     else {
    //       return "http://maps.google.com/mapfiles/ms/icons/green.png"
    //     }
    // }

      // const map_Id="d7d3b3829ba8148c"


      return (
    <div id="mapContainer">
      <LoadScript id ="map" googleMapsApiKey="AIzaSyBU05O2xt-HlE4y5SUo0tHnCB0WcUi6Rk4" mapId="d7d3b3829ba8148c">
        <GoogleMap
          // onClick={recenter}
          mapContainerStyle={containerStyle}
          zoom={13.5} //gotta come up with a formula for a dynamic zoom that adjusts every time a pin is placed
          center={center}
          options={settings}
          mapId={map_Id}
        >
              {trip.map((visit) => (
                <Marker
                    id="marker"
                    key={visit.id}
                    position= {{lat: parseFloat(visit.latitude), lng: parseFloat(visit.longitude)}} 
                    icon={determineIcon(visit)}
                /> ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}



    // MEANT TO HANDLE DYNAMICALLY GENERATING THE VIEW (CENTER)


    // function pleaseWork(trip) {
    //   let count = 0, sumLng = 0
    //   for (let key in trip) {
    //    if (trip.hasOwnProperty(key)) {
    //      if (trip[key].hasOwnProperty("lng")) {
    //        sumLng += trip[key].lng;
    //        count += 1;
           
    //      }
    //    }
    //   }
    //     recenter.push(sumLng/count)
    //     let count1 = 0, sumLat = 0
    //     for (let ke in trip) {
    //      if (trip.hasOwnProperty(ke)) {
    //        if (trip[ke].hasOwnProperty("lat")) {
    //          sumLat += trip[ke].lat;
    //          count1 += 1;
    //        }
    //      } 
    //     }  recenter.push(sumLat/count1) 
    //     return recenter
    //   }

    //   function load(){
    //     setCenter(recenter)
    //   }
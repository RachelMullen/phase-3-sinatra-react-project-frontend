import React from "react";


export default function PlaceCard({ place, setCurrentPlace }) {

    return (
        <>
            <p onClick={() => setCurrentPlace(place)}>{place[0].place.name}</p>
        </>
    )
}
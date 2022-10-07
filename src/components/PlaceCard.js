import React from "react";


export default function PlaceCard({ place, setCurrentPlace }) {

    return (
        <div className="single-place">
            <p className="place-text" onClick={() => setCurrentPlace(place)}>{place[0].place.name}</p>
        </div>
    )
}
import React from "react";


export default function PlaceCard({ place, setCurrentPlace }) {


    return (
        <div className="single-place">
            <p className="place-text" onClick={() => setCurrentPlace(place)}>{place[1].linked_visit[0].favorite ? "💫 " : null}{place[0].place.name}{place[1].linked_visit[0].favorite ? " 💫" : null}</p>
        </div>
    )
}
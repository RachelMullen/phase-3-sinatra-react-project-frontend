import React from "react";


export default function PlaceCard({ place }) {

    console.log(place);

    return (
        <>
            <p>{place[0].place.name}</p>
        </>
    )
}
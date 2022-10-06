import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Comment from "./Comment";


export default function PlaceFull({ place }) {
const [ isVisited, setIsVisited ] = useState(place[0].place.complete)

    const comments = place[0].comments.map(comment => {

        return (
            <div id="comment-list" key={uuid()}>
                <Comment comment={comment}/>
            </div>
        )
    })

    function handleVisit() {

    }

    return (
        <>
            <h2 id="go-selected-place" style={{ fontSize: "2rem"}}>{place[0].place.name}</h2>
            <button id="visit-button" style={{ color: "green"}} onClick={handleVisit}>{place[0].place.complete ? "UNVISIT" : "VISIT"}</button>
            <p id="go-selected-place-descrip">description: {place[0].place.description}</p>
            {/* <p>latitude: {place[0].place.latitude}</p>
            <p>longitude: {place[0].place.latitude}</p> */}
            {comments}
        </>
    )
}
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Comment from "./Comment";


export default function PlaceFull({ place, user }) {
const [ isVisited, setIsVisited ] = useState(place[1].linked_visit[0].complete)

    const comments = place[0].comments.map(comment => {

        return (
            <div id="comment-list" key={uuid()}>
                <Comment comment={comment}/>
            </div>
        )
    })

    // console.log(place[1].linked_visit[0].complete)
    // console.log(place[1].linked_visit[0])

    function handleVisit() {
        // console.log("visit click")
        setIsVisited(() => !isVisited)
        let patchObj = {
            complete: isVisited
        }
        fetch(`http://localhost:9292/${place[1].linked_visit[0].id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(patchObj),
          })
          .then(resp => resp.json())
          .then(data => console.log(data));
    }

    return (
        <>
            <h2 id="go-selected-place" style={{ fontSize: "2rem"}}>{place[0].place.name}</h2>
            <button id="visit-button" style={{ color: "green"}} onClick={handleVisit}>{isVisited ? "VISITED" : "VISIT"}</button>
            <p className="go-selected-place-descrip">{place[0].place.description}</p>
            {/* <p>latitude: {place[0].place.latitude}</p>
            <p>longitude: {place[0].place.latitude}</p> */}
            {comments}
        </>
    )
}
import React from "react";
import { v4 as uuid } from "uuid";
import Comment from "./Comment";


export default function PlaceFull({ place }) {

    console.log(place);

    const comments = place[0].comments.map(comment => {

        return (
            <Comment comment={comment} key={uuid()}/>
        )
    })

    return (
        <>
            <h2 style={{ fontSize: "2rem"}}>THIS IS THE SELECTED PLACE</h2>
            <p>{place[0].place.name}</p>
            <p>description (coming soon): {place[0].place.description}</p>
            <p>latitude: {place[0].place.latitude}</p>
            <p>longitude: {place[0].place.latitude}</p>
            {comments}
        </>
    )
}
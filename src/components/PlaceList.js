import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import { v4 as uuid } from "uuid";
import PlaceFull from './PlaceFull';



export default function PlaceList({ userHash, setUser, list, user }) {
    let cards = [];
    let name = Object.keys(list)


    const [ currentPlace, setCurrentPlace ] = useState(list[name][0])

    function generateList () {
        if (list) {
            cards = list[name].map(place => {
                return (
                    <PlaceCard place={place} setCurrentPlace={setCurrentPlace} key={uuid()} />
                )
            })
        }
    }

    generateList();



    return (
        <div id="go-place-list">
            <h2 id="time-to-explore" >Time to explore!</h2>
            {cards}
            <p>-------------------------------</p>
            <PlaceFull userHash={userHash} setUser={setUser} user={user} place={currentPlace}/>
        </div>
    )
}
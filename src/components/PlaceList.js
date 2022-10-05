import React from "react";
import PlaceCard from "./PlaceCard";
import { v4 as uuid } from "uuid";



export default function PlaceList({ list, user }) {
    let cards = [];
    let name = Object.keys(list)

    function generateList () {
        if (list) {
            cards = list[name].map(place => {
                return (
                    <PlaceCard place={place} key={uuid()} />
                )
            })
        }
    }

    generateList();



    return (
        <>
            {cards}
        </>
    )
}
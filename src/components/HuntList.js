import React from "react";
import HuntCard from "./HuntCard";
import { v4 as uuid } from "uuid";

export default function HuntList({ list, setCurrentGame }) {
    let cards = [];

    function generateList () {
        if (list) {
            cards = list.map(hunt => {
                return (
                    <HuntCard hunt={hunt} setCurrentGame={setCurrentGame} key={uuid()} />
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
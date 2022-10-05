import React from "react";


export default function HuntCard({ hunt, setCurrentGame, container }) {

    function handleClick () {
        if (container === "go") {
            console.log("click from go page");
            // sets current game
            setCurrentGame(hunt)
        } else if (container === "explore") {
            console.log("click from explore page");
            // fetch request that starts game and sets current game
        }
    }


    return (
        <div className="single-hunt">
        <p onClick={() => handleClick()}>{Object.keys(hunt)}</p>
        </div>
    )
}
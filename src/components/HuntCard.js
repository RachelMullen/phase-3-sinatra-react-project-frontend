import React from "react";


export default function HuntCard({ hunt, setCurrentGame }) {
    return (
        <div class="single-hunt">
        <p onClick={() =>setCurrentGame(hunt)}>{Object.keys(hunt)}</p>
        </div>
    )
}
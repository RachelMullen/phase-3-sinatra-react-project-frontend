import React from "react";


export default function HuntCard({ hunt, setCurrentGame }) {
    return (
        <>
        <p onClick={() =>setCurrentGame(hunt)}>{Object.keys(hunt)}</p>
        </>
    )
}
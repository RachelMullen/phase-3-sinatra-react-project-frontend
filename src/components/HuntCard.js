import React, { useState } from "react";
import { Redirect } from "react-router-dom";


export default function HuntCard({ user, hunt, setCurrentGame, container }) {
    const [ redirect, setRedirect ] = useState("");

    let name = Object.keys(hunt);
    

    function handleClick () {
        if (container === "go") {
            console.log("click from go page");
            // sets current game
            setCurrentGame(hunt)
        } else if (container === "explore") {
            console.log("click from explore page");
            fetch(`http://localhost:9292/${user[0].id}/${hunt[name].id}/start`)
            .then(resp => resp.json())
            .then(data => {
                setCurrentGame(data);
                setRedirect("go");
            });
        }
    }

    return (
        <div className="single-hunt">
            <p onClick={() => handleClick()}>{Object.keys(hunt)}</p>
            {redirect === "go" ? <Redirect to="/go" /> : null}
        </div>
    )
}

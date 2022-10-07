import React from "react";
import HuntCard from "./HuntCard";
import { v4 as uuid } from "uuid";

export default function HuntList({ userHash, setUser, user, list, setCurrentGame, container }) {
    let cards = [];

    function setDefault() {
        if (user) {
          if (user[2]["in_progress"][0]) {
            setCurrentGame(user[2]["in_progress"][0]);
            console.log("we have a default game");
          }
        }
      }
    
      setDefault();

    function generateList () {
        if (list) {
            cards = list.map(hunt => {
                return (
                    <div id="hunt-selector-list" key={uuid()}>
                        <HuntCard userHash={userHash} setUser={setUser} user={user} container={container} hunt={hunt} setCurrentGame={setCurrentGame}/>
                    </div>
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
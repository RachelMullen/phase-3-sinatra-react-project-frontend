import React from "react";
import HuntCard from "./HuntCard";
import { v4 as uuid } from "uuid";

export default function HuntList({ user, list, setCurrentGame, container }) {
    let cards = [];

    function generateList () {
        if (list) {
            cards = list.map(hunt => {
                return (
                    <div id="hunt-selector-list" key={uuid()}>
                        <HuntCard user={user} container={container} hunt={hunt} setCurrentGame={setCurrentGame}/>
                    </div>
                )
            })
        }
    }
  }

  generateList();

  return <>{cards}</>;
}

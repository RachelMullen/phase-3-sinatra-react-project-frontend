import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function HuntCard({ userHash, setUser, user, hunt, setCurrentGame, container }) {
  const [redirect, setRedirect] = useState("");

  let name = Object.keys(hunt);

  // console.log(user[0].id)
  // console.log(hunt[name].id)

  function handleClick() {

    // THIS IS WHAT HAPPENS FROM THE GO PAGE
    if (container === "go") {
      console.log("click from go page");
      // sets current game
      setCurrentGame(hunt);
    } else if (container === "explore" && user) {
      console.log("click from explore page");
      fetch(`http://localhost:9292/${user[0].id}/${hunt[name].id}/start`)
        .then((resp) => resp.json())
        .then((data) => {
          setCurrentGame(data);
          setRedirect("go");
          console.log("redirect state was just set to go");
        });
        
      fetch(`http://localhost:9292/users/${user[0].username}/${user[0].password}`)
        .then((resp) => resp.json())
        .then((data) => {
            // console.log("refetching user")
          setUser(data);
        })
        .catch(() => {
          alert("No user found (and probably)");
        });

        alert("You are ready to embark on this quest! and elliot would prefer it if this alert were replaced by an animation or a sound effect instead or something that communicates the same thing but not at the cost of user experience.")


        // THIS HAPPENS FROM THE EXPLORE PAGE
    } else if (container === "explore" && !user) {
      alert("Please log in or make an account to embark on a quest.");
      setRedirect("home");
    }
  }

  console.log("logging hunt")
  console.log(hunt)
  console.log(userHash)

  return (
    <div className="single-hunt">
      <p onClick={() => handleClick()}><span className="single-line-text">{name}</span></p>
      <p className="author-text">{container == "explore" ? `by ${userHash[hunt[name].user_id]} - 📍 ${hunt[name].locale}` : null }</p>
      {redirect === "go" ? <Redirect to="/go" /> : null}
      {redirect === "home" ? <Redirect to="/" /> : null}
    </div>
  );
}

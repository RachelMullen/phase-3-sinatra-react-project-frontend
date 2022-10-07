import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import shred from '../assets/shred.gif'

export default function Dashboard({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isDestroyed, setIsDestroyed] = useState(false);
  const [series, setSeries] = useState(0);

  function handleUpdate() {
    let patchObj = {
      bio: userInput,
    };
    fetch(`http://localhost:9292/${user[0].id}/bioupdate`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchObj),
    }).then((resp) => resp.json());
  }

  function handleDeleteAccount() {
    fetch(`http://localhost:9292/${user[0].id}/destroy`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        setIsDestroyed(true);
      });
  }

  function deleteDatabase() {
    setSeries(9);
    fetch(`http://localhost:9292/deletewebsite`, {
      method: "DELETE",
    }).then((resp) => resp.json());
  }

  return (
    <React.Fragment>
      {/* { series === 9 ? <img className="rotating" src={shred}></img> : null} */}
      {!user ? (
        <Redirect to="/" />
      ) : (
        <>
          <h1 className="dashboard-h1">{user[0].username}</h1>
          <p>
            <LocationOnIcon
              sx={{ verticalAlign: "middle", marginRight: "5px" }}
            />{" "}
            - {user[0].locale}
          </p>
          <p>{user[0].bio}</p>
          <h1>
            {" "}
            Score: {user[3].stats.score}
            {user[3].stats.score > 0 ? ", nice." : ", you fucking idiot."}
          </h1>
          <button onClick={() => setIsEditing(true)}>EDIT PROFILE</button>
          {isEditing ? (
            <div>
              <h1>Edit Profile</h1>
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  placeholder="Update your bio."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                ></input>
              </form>
              <button onClick={handleDeleteAccount}>DELETE PROFILE</button>
            </div>
          ) : null}
        </>
      )}
      <br />
      {series === 0 ? (
        <button onClick={() => setSeries(1)}>Advanced Options</button>
      ) : null}
      {series === 1 ? (
        <button onClick={() => setSeries(2)}>
          Please Only Use If You're A Developer
        </button>
      ) : null}
      {series === 2 ? (
        <button onClick={() => setSeries(3)}>
          Seriously, Please Only Use If You're A Developer
        </button>
      ) : null}
      {series === 3 ? (
        <button onClick={() => setSeries(4)}>
          Rachel has approved this idea
        </button>
      ) : null}
      {series === 4 ? (
        <button onClick={() => setSeries(5)}>
          Luke has approved this idea
        </button>
      ) : null}
      {series === 5 ? (
        <button onClick={() => setSeries(6)}>
          Cassidy has approved this idea
        </button>
      ) : null}
      {series === 6 ? (
        <button onClick={() => setSeries(7)}>
          Elliot may have generated this idea
        </button>
      ) : null}
      {series === 7 ? (
        <button onClick={() => setSeries(8)}>No more advanced options</button>
      ) : null}
      {series === 8 ? (
        <button onClick={() => deleteDatabase()}>Delete Entire Database</button>
      ) : null}
      {isDestroyed ? <Redirect to="/" /> : null}
    </React.Fragment>
  );
}

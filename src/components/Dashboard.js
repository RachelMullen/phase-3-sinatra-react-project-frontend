import React from "react";
import { Redirect } from "react-router-dom";

export default function Dashboard({ user }) {

  return (
    <React.Fragment>
      {!user ?
      <Redirect to="/" />
      :
      <>
        <h1>{user[0].username}</h1>
        <p>{user[0].locale}</p>
        <p>{user[0].bio}</p>
        <h1>Score: {user[3].stats.score}{user[3].stats.score > 0 ? ", nice." : ", you fucking idiot."}</h1>
      </>
      }
    </React.Fragment>
  );
}

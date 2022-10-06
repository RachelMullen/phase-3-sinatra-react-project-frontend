import React from "react";

export default function Dashboard({ user }) {
  return (
    <React.Fragment>
      <h1>{user[0].username}</h1>
      <h1>
        Score: {user[3].stats.score}
        {user[3].stats.score > 0 ? ", nice." : ", you fucking idiot."}
      </h1>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Home({ user }) {
  const [clicked, setClicked] = useState(false);
  return (
    <React.Fragment>
      <h1>TRACK YOUR FUN</h1>
      <p>
        <em>A list-based app to track your fun!</em>
      </p>
      <div className="popup">
        Welcome, please sign in or create an account you absolute clown!
        <div className="button-container">
          <input
            type="submit"
            value="Sign Up"
            onClick={() => setClicked(true)}
          />
        </div>
        <p>
          Already have an account?{" "}
          <strong>
            <a href="http://localhost:3000/login">Log In</a>
          </strong>
        </p>
      </div>
      {clicked ? <Redirect to="/signup" /> : null}
      {user ? <Redirect to="/dashboard" /> : null}
    </React.Fragment>
  );
}

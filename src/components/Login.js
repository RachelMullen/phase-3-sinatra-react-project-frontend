import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Login({ user, setUser }) {
  const [userInput, setUserInput] = useState(["", ""]);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/users/${userInput[0]}/${userInput[1]}`)
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
        setUserInput(["", ""]);
      })
      .catch((error) => {
        alert("No user found (and probably)")
        setUserInput(["", ""]);
      });
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            value={userInput[0]}
            onChange={(e) => setUserInput([e.target.value, userInput[1]])}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={userInput[1]}
            onChange={(e) => setUserInput([userInput[0], e.target.value])}
          />
        </div>
        <div>
          <input type="SUBMIT" />
        </div>
      </form>
      <p>
        <br />
          Need to create an account?{" "}
          <br />
          <strong>
            <a href="http://localhost:3000/">Sign Up</a>
          </strong>
        </p>
    </div>
  );

  return (
    <React.Fragment>
      <body className="main-container">
      <div className="home">
        <h1>SIGN IN</h1>
        {renderForm}
        </div>
      </body>
      {user ? <Redirect to="/go" /> : null}
    </React.Fragment>
  );
}

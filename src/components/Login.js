import React, { useState } from "react";

export default function Login() {
  const [ user, setUser ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "",
        password: "",
      }),
    })
      .then((r) => r.json())
      .then((users) => {
        setUser(users);
      });
    document.getElementById("login-form").reset();
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            value={user[0]}
            onChange={(e) => setUser([e.target.value,user[1]])}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={user[1]}
            onChange={(e) => setUser([user[0],e.target.value])}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <React.Fragment>
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {renderForm}
        </div>
      </div>
    </React.Fragment>
  );
}

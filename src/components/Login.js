import React, { useState } from "react";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username:'',
        password:'',
      }),
    })
      .then((r) => r.json())
      .then((users) => {setUsers})
      document.getElementById("login-form").reset();
};

const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
import React, { useState } from "react";

export default function Login({onAddUser, onCurrentUser, onHasLoggedIn}) {

const [ userData, setUserData ] = useState({
    username: '',
    visits: [],
    });

function handleChange(e) {
    setUserData({
        ...userData, [e.target.name]: e.target.value,
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

  const newUser = {
    id: userData.username,
    username: userData.username,
    visits: []
  }

    onCurrentUser(newUser)

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((newUser) => {
        onAddUser(newUser)
        onHasLoggedIn()
      })
      .catch(() => {

      });
      document.getElementById("login-form").reset();
};

return (
    <React.Fragment>
    <div>
      <form onSubmit={handleSubmit} id="login-form">
        <label>
          <input type="text" name="username" onChange={handleChange} className="input-text" placeholder="Your Username"/>
        </label>
        <button type="submit" className="submit"> 
        Submit
        </button>
      </form>
    </div>
    </React.Fragment>
  );
}
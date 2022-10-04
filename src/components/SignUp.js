import React,{ useState } from "react";

export default function SignUp({ setUser }) {
  const [ userInput, setUserInput ] = useState(["",""]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('click!')

    fetch(`http://localhost:9292/users/${userInput[0]}`)
    .then(resp => resp.json())
    .then(data => { 
      setUser(data);
      setUserInput(["",""]);
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
            onChange={(e) => setUserInput([e.target.value,userInput[1]])}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={userInput[1]}
            onChange={(e) => setUserInput([userInput[0],e.target.value])}
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




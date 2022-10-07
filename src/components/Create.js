import React, { useState, useEffect } from "react";

export default function Create({ user }) {
  const [input, setInput] = useState(["","", false]);
  const [series, setSeries] = useState(0);
  const [hunt, setHunt] = useState();

  console.log(user);

  function createHunt(e) {
    e.preventDefault();
    let body = {
      title: input[0],
      locale: input[1],
      public: input[2]
    };
    fetch(`http://localhost:9292/${user[0].id}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    .then(resp => resp.json())
    .then(data => {
      setInput(["","", false])
    })
  }

  return (
    <>
      {series === 0 ? (
        <form onSubmit={(e) => createHunt(e)}>
          <br />
          <input
            className="create-entry"
            type="text"
            placeholder="What will you call this quest?"
            onChange={(e) => setInput([e.target.value, input[1], input[2]])}
            value={input[0]}
          ></input>
          <br />
          <br />
          <input
            className="create-entry"
            type="text"
            placeholder="What is the locale?"
            onChange={(e) => setInput([input[0], e.target.value, input[2]])}
            value={input[1]}
          ></input>
          <br />
          <br />
          <br />
          Will this quest be publicly available?{" "}
          <input type="checkbox" onClick={() => setInput([input[0], input[1], !input[2]])} value={input[2]}/>
          <br />
          <br />
          <input type="submit"></input>
        </form>
      ) : null}
    </>
  );
}

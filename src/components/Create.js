import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export default function Create({ user }) {
  const [input, setInput] = useState(["", "", false, ""]);
  const [series, setSeries] = useState(0);
  const [huntId, setHuntId] = useState();

  console.log(user);

  function createHunt(e) {
    e.preventDefault();
    let body = {
      title: input[0],
      locale: input[1],
      public: input[2],
    };
    fetch(`http://localhost:9292/${user[0].id}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setInput(["", "", "", ""]);
        setSeries(1);
        setHuntId(data);
      });
  }

  function addStop(e) {
    e.preventDefault();
    let stop = {
      name: input[0].toString(),
      description: input[1].toString(),
      latitude: parseFloat(input[2]),
      longitude: parseFloat(input[3]),
    };
    fetch(`http://localhost:9292/${user[0].id}/${huntId}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stop),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setInput(["", "", "", ""]);
        console.log(data);
      });
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
          />
          <br />
          <br />
          <input
            className="create-entry"
            type="text"
            placeholder="What is the locale?"
            onChange={(e) => setInput([input[0], e.target.value, input[2]])}
            value={input[1]}
          />
          <br />
          <br />
          <br />
          Will this quest be publicly available?{" "}
          <input
            type="checkbox"
            onClick={() => setInput([input[0], input[1], !input[2]])}
            value={input[2]}
          />
          <br />
          <br />
          <input type="submit" value="Start!" />
        </form>
      ) : null}

      {series === 1 ? (
        <div>
          <form onSubmit={(e) => createHunt(e)}>
            <br />
            <input
              className="create-entry"
              type="text"
              placeholder="What's this stop called?"
              onChange={(e) =>
                setInput([e.target.value, input[1], input[2], input[3]])
              }
              value={input[0]}
            />
            <br />
            <br />
            <input
              className="create-entry"
              type="text"
              placeholder="Write a short description..."
              onChange={(e) =>
                setInput([input[0], e.target.value, input[2], input[3]])
              }
              value={input[1]}
            />
            <br />
            <br />
            <input
              className="create-entry"
              type="text"
              placeholder="Enter the latitude as a float (lmao)"
              onChange={(e) =>
                setInput([input[0], input[1], e.target.value, input[3]])
              }
              value={input[2]}
            />
            <br />
            <br />
            <input
              className="create-entry"
              type="text"
              placeholder="Enter the longitude as a float (lmao)"
              onChange={(e) =>
                setInput([input[0], input[1], input[2], e.target.value])
              }
              value={input[3]}
            />
            <br />
            <br />
            <br />
            <input type="submit" value="Add Stop!" onClick={addStop}/>
            <br />
            <br />
          </form>
          <form>
            <input type="submit" value="Finalize Your Quest!" onClick={() => setSeries(2)}/>
          </form>
        </div>
      ) : null}

      {!user ? <Redirect to="/" /> : null}
      {series === 2 ? <Redirect to="/" /> : null}
    </>
  );
}

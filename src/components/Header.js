import React from 'react';
import NavBar from "./NavBar";

export default function Header() {

  return (
    <React.Fragment>
        <div>
            <header>
                <h1>TRACK YOUR FUN</h1>
                <p><em>A list-based app to track your fun!</em></p>
        <div>
            < br/>
            <NavBar/>
            < br/>
        </div>
            </header>
        </div>
    </React.Fragment>
  );
}

import React from 'react';

export default function Go({ user }) {
    return (
        <React.Fragment>
        <h1>This is the Go Page</h1>
        {user ? <p style={{ color:'black'}}>Current User is {user.username}</p> : null}
        </React.Fragment>
      );
}
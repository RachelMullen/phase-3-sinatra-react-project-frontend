import React from "react";


export default function Comment({ comment }) {

    return (
        <>
            <p>comment from user {comment.user_id}: {comment.body}</p>
        </>
    )
}
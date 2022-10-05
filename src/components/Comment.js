import React from "react";


export default function Comment({ comment }) {

    return (
        <div className="single-comment">
            <p>comment from user {comment.user_id}: {comment.body}</p>
        </div>
    )
}
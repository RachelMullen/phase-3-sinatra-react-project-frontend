import React from "react";


export default function Comment({ userHash, comment }) {

    return (
        <div className="single-comment">
            <p className="comment-text"><strong>{userHash[comment.user_id]}</strong>: {comment.body}</p>
        </div>
    )
}
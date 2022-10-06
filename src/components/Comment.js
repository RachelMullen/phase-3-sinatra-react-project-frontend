import React from "react";

export default function Comment({ comment }) {
  return (
    <div className="single-comment">
      <p>
        <strong>COMMENTS:</strong> User #: {comment.user_id}
        : {comment.body}
      </p>
    </div>
  );
}

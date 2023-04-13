import React from "react";

function Comment({comment, onCommentDelete}) {
    const {id, reply} = comment;

    const handleDeleteClick = () => {
        fetch(`/comments/${id}`, {
            method: "DELETE",
        });
        onCommentDelete(id)
    }

    return (
        <div className="comment-section">
            <p>{reply}</p>
            <button className="delete-btn" onClick={handleDeleteClick}>✘</button>
            <hr />
        </div>
    )
}

export default Comment;

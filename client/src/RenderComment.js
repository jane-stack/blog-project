import React from "react";

function RenderComment({comment}) {
    const {id, reply} = comment;

    function handleDeleteComment() {
        fetch(`/comments/${id}`, {
            method: "DELETE",
        });
        console.log(id);
    }

    return (
        <div className="comment-section">
            <p>{reply}</p>
            <button className="delete-btn" onClick={handleDeleteComment}>✘</button>
        </div>
    )
}

export default RenderComment;
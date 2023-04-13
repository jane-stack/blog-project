import React, { useState } from "react";

function NewComment({user, onAddComment}) {
    const [reply, setReply] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newReply = {
            reply: reply,
            user_id: user.id
        }
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReply),
        })
        .then(resp => resp.json())
        .then(newReply => onAddComment(newReply))

        // refresh input field after submitting form
        setReply("");
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <input className="comment-input-description" type="text" name="reply" placeholder="Write your comment." onChange={(e) => setReply(e.target.value)} value={reply} />
            <button type="submit" className="contact-btn">SEND</button>
        </form>
    )
}

export default NewComment;
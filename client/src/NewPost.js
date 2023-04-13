import React, { useState } from "react";

function NewPost({onAddPost, user}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            title: title,
            description: description,
            user_id: user.id
        }
        fetch("/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
        .then(resp => resp.json())
        .then(newPost => onAddPost(newPost));

        // refresh input fields after submitting form
        setTitle("");
        setDescription("");
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Write A New Post</h2>
            <input className="post-input" type="text" name="title" placeholder="Title of Your Post.." onChange={(e) => setTitle(e.target.value)} value={title} />
            <textarea className="post-input-description" type="textbox" name="description" placeholder="Start your post!" onChange={(e) => setDescription(e.target.value)} value={description} /><br />
            <button type="submit" className="contact-btn">POST</button>
        </form>
    )
}

export default NewPost;
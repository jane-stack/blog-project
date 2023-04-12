import React, { useEffect, useState } from "react";

function EditPost({select, isEditing, setIsEditing, onUpdatePost}) {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const closeEditForm = () => setIsEditing(!isEditing);

    useEffect(() => {
        setId(select.id);
        setTitle(select.title);
        setDescription(select.description);
    }, [select]);

    function handleEditSubmit(e) {
        e.preventDefault();
        const editedPost = {
            id: id,
            title: title,
            description: description
        }

        fetch(`/blogs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedPost)
        })
        .then(resp => resp.json())
        .then(onUpdatePost(editedPost));

        // refresh input field after submitting form
        setTitle("");
        setDescription("");
        closeEditForm();
    }

    return (
        <form onSubmit={handleEditSubmit}>
            <input className="post-input" type="text" name="title" placeholder="Title of Your Post.." onChange={(e) => setTitle(e.target.value)} value={title} />
            <textarea className="post-input-description" type="text" name="description" placeholder="Start your post!" onChange={(e) => setDescription(e.target.value)} value={description} />
            <button type="submit" className="contact-btn">DONE EDITING</button>
        </form>
    )
}
export default EditPost;
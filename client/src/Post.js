import React, { useState } from "react";
import EditPost from "./EditPost"

function Post({
    post, 
    user, 
    select, 
    onSelectClick,
    onUpdatePost,
    onPostDelete
}) {

    const [isEditing, setIsEditing] = useState(false);
    const {id, title, description} = post;
    const showEditForm = () => setIsEditing(isEditing => !isEditing);

    function handleDeleteClick() {
        fetch('/blogs/:id', {
            method: "DELETE",
        });
        onPostDelete(id);
    }

    const handleEditClick = () => {
        onSelectClick(post);
        return (
            <EditPost select={select} isEditing={isEditing} setIsEditing={setIsEditing} onUpdatePost={onUpdatePost} />
        )
    }

    return (
        <ul className="post-section">
            <h1>{title}</h1>
            <p>{description}</p>
            <button className="edit-btn" onClick={showEditForm}>✏️</button>
            <button className="delete-btn" onClick={handleDeleteClick}>🗑</button>
            {isEditing && handleEditClick()}
        </ul>
    )
}
export default Post;
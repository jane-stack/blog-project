import React, { useState } from "react";
import EditPost from "./EditPost";
import CommentList from "./CommentList";

function Post({
    post, 
    user, 
    select, 
    onSelectClick,
    onUpdatePost,
    onPostDelete
}) {

    const [isEditing, setIsEditing] = useState(false);
    const [isCommenting, setIsCommenting] = useState(false);
    const {id, title, description} = post;
    const showEditForm = () => setIsEditing(isEditing => !isEditing);
    const showCommentForm = () => setIsCommenting(isCommenting => !isCommenting);

    function handleDeleteClick() {
        fetch(`/blogs/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id);
    }

    const handleCommentIcon = () => {
        onSelectClick(post);
        return (
            <CommentList 
                post={post} 
                user={user} 
                isCommenting={isCommenting}
                setIsCommenting={setIsCommenting}
            />
        )

    }
 
    const handleEditIcon = () => {
        onSelectClick(post);
        return (
            <EditPost 
                select={select} 
                isEditing={isEditing} 
                setIsEditing={setIsEditing} 
                onUpdatePost={onUpdatePost} />
        )
    }

    return (
        <ul className="post-section">
            <h1>{title}</h1>
            <p>{description}</p>
            <button className="edit-btn" onClick={showEditForm}>✏️</button>
            <button className="msg-btn" onClick={showCommentForm} >💬</button>
            <button className="delete-btn" onClick={handleDeleteClick}>✘</button>
            {isEditing && handleEditIcon()}
            {isCommenting && handleCommentIcon()}
            {/* <CommentList post={post} user={user} /> */}
        </ul>
    )
}
export default Post;
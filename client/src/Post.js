import React, { useState, useEffect } from "react";
import EditPost from "./EditPost";
import RenderComment from "./RenderComment";
import NewComment from "./NewComment";

function Post({
    post, 
    user, 
    select, 
    onSelectClick,
    onUpdatePost,
    onPostDelete
}) {

    const [isEditing, setIsEditing] = useState(false);
    const [comments, setComments] = useState([]);
    const [isCommenting, setIsCommenting] = useState(false);
    const {id, title, description} = post;
    const showEditForm = () => setIsEditing(isEditing => !isEditing);
    const showCommentForm = () => setIsCommenting(isCommenting => !isCommenting);

    useEffect(() => {
        fetch(`/blogs/${id}/comments`)
        .then(resp => resp.json())
        .then(setComments);
      }, [id]);

      const handleAddComment = (newReply) => {
        setComments([...comments, newReply]);
      }

      const handleDeleteComment = (id) => {
        const updatedComment = comments.filter(comment => comment.id !== id);
        setComments(updatedComment);
      }

    function handleDeleteClick() {
        fetch(`/blogs/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id);
    }

    const handleCommentClick = () => {
        onSelectClick(post);
        return (
            <NewComment user={user} isCommenting={isCommenting} setIsCommenting={setIsCommenting} onAddComment={handleAddComment} onCommentDelete={handleDeleteComment} />
        )
    }

    const handleEditClick = () => {
        onSelectClick(post);
        return (
            <EditPost select={select} isEditing={isEditing} setIsEditing={setIsEditing} onUpdatePost={onUpdatePost} />
        )
    }

    const renderCommentList = comments.map(comment => {
        return (
            <RenderComment
                key={comment.id}
                reply={comment.reply}
                comment={comment}
                select={select}
                onAddComment={handleAddComment}
                onCommentDelete={handleDeleteComment}
            />
        )
    })

    return (
        <ul className="post-section">
            <h1>{title}</h1>
            <p>{description}</p>
            <button className="edit-btn" onClick={showEditForm}>✏️</button>
            <button className="msg-btn" onClick={showCommentForm}>💬</button>
            <button className="delete-btn" onClick={handleDeleteClick}>✘</button>
            {isEditing && handleEditClick()}
            {isCommenting && handleCommentClick()}
            <br/>
            <h3>Comments</h3>
            {renderCommentList}
        </ul>
    )
}
export default Post;
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import NewComment from "./NewComment";

function CommentList({post, user, isCommenting, setIsCommenting}) {
    const [comments, setComments] = useState([]);
    // const [selectComment, setSelectComment] = useState({});
    const {id} = post;


    useEffect(() => {
        fetch(`/blogs/${id}/comments`)
        .then(resp => resp.json())
        .then(setComments);
    }, [id]);

    // Allow us to know which comment was clicked
    // const handleCommentClick = (selectedComment) => {
    //    setSelectComment(selectedComment);
    // }

    const handleAddComment = (newComment) => {
        setComments([...comments, newComment]);
    }

    const handleDeleteComment = (id) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
    }

    const renderComments = comments.map(comment => {
        return (
            <Comment
                key={comment.id}
                reply={comment.reply}
                comment={comment}
                onCommentDelete={handleDeleteComment}
                // onSelectCommented={handleCommentClick}
            />
        )
    })

    return (
        <div>
            <NewComment
                user={user}
                onAddComment={handleAddComment} 
                isCommenting={isCommenting}
                setIsCommenting={setIsCommenting}
                />
            <h3>Comments</h3>
            {renderComments}
        </div>
    )
}

export default CommentList;
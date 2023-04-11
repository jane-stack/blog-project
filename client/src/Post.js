import React from "react";

function Post({post, user}) {
    const {id, title, description} = post;

    return (
        <ul className="post-section">
            <h1>{title}</h1>
            <p>{description}</p>
        </ul>
    )
}
export default Post;
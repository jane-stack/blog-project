import { useState, useEffect } from "react";
import Post from "./Post";
import NewPost from "./NewPost";

function BlogList({user}) {
    const [posts, setPosts] = useState([]);

useEffect(() => {
    fetch("/blogs")
    .then((resp) => resp.json())
    .then(setPosts);
}, []);

const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

const renderBlogPosts = posts.map(post => {
    return (
        <Post 
            key={post.id}
            title={post.title}
            description={post.description}
            post={post}
        />
    )
})

    return (
        <div>
            <h1 className="top-h1">Your Blog Posts</h1>
            <ul className="scroll">
                {renderBlogPosts}
            </ul>
            <NewPost 
                user={user}
                onAddPost={handleAddPost}
            />
        </div>
    )
}
export default BlogList;
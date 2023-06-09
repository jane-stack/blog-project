import { useState, useEffect } from "react";
import Post from "./Post";
import NewPost from "./NewPost";

function BlogList({user}) {
    const [posts, setPosts] = useState([]);
    const [select, setSelect] = useState({});  


useEffect(() => {
    fetch("/blogs")
    .then((resp) => resp.json())
    .then(setPosts);
}, []);

const handleAddPost = (newPost) => {
  setPosts([...posts, newPost]);
}

// Allow us to know which post had been clicked
const handleEditClick = (selectedPost) => {
    setSelect(selectedPost);
  }

  const handleUpdatedPost = (updatedPost) => {
    const updatedPosts = posts.map(post => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
  }

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  }

const renderBlogPosts = posts.map(post => {
    return (
        <Post 
            key={post.id}
            user={user}
            title={post.title}
            description={post.description}
            post={post}
            select={select}
            onSelectClick={handleEditClick}
            onUpdatePost={handleUpdatedPost}
            onPostDelete={handleDeletePost}
        />
    )
})

    return (
        <div>
            <h1 className="top-h1">Your Blogs {user.username}</h1>
            <ul className="ul-post">
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
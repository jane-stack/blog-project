import React from "react";

function Home({user}) {

    return (
        <div>
            <h1 className="home-h1">Welcome {user.username}</h1>
            <h4 className="home-h1">Welcome to BLOG-SPACE! Where you can post your blogs, comment feedback on your friends blog posts, and stay connected with your community!</h4>
        </div>
    )
}

export default Home;
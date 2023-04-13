import React from "react";

function Home({user}) {

    return (
        <div>
            <h1 className="home-h1">Welcome {user.username}</h1>
        </div>
    )
}

export default Home;
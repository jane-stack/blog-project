import React from "react";

function NavBar({ user, setUser }) {

    function handleLogoutClick() {
        fetch('/logout', { method: "DELETE" }).then(resp => {
            if (resp.ok) {
                setUser(null)
            }
        });
    }

    return (
        <div className="navbar">
            <h1 className="title-blog">Blog Space</h1>
            <button onClick={handleLogoutClick}>Logout</button>
        </div>
    )
}
export default NavBar;
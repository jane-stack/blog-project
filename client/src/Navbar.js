import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
    display: "inline-block",
    width: "auto",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#385949",
    textDecoration: "none",
    color: "white",
  };

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
                <NavLink to="/" exact style={linkStyle}>HOME</NavLink>
                <NavLink to="blogs" exact style={linkStyle}>BLOGS</NavLink>
                <NavLink to="#" onClick={handleLogoutClick} exact style={linkStyle}>LOGOUT</NavLink>
        </div>
    )
}
export default NavBar;
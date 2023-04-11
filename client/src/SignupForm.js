import React, { useState } from "react";

function SignupForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        .then(resp => {
            if (resp.ok) {
                resp.json().then(user => onLogin(user))
            } else {
                resp.json().then(err => setErrors(err.errors));
            }
        });
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <lable htmlFor="username">Username</lable>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <lable htmlFor="password">Password</lable>
            <input
                type="password"
                name="password"
                placeholder="***************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            {errors.map((err) => (
                <p key={err} style={{ color: "red" }}>
                    {err}
                </p>
      ))}
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignupForm;
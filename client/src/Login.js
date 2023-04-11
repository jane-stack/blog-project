import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <wrapper>
            {showLogin ? (
                <>
                <LoginForm onLogin={onLogin} />
                <divider />
                <p>
                    Don't have an account? &nbsp;
                    <button onClick={() => setShowLogin(false)}>Sign Up</button>
                </p>
                </>
            ):(
                <>
                <SignupForm onLogin={onLogin} />
                <divider />
                <p>
                    Already have an account? &nbsp;
                    <button onClick={() => setShowLogin(true)}>Log In</button>
                </p>
                </>
            )}
        </wrapper>
    )
}

export default Login;
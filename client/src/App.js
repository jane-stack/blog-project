import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogList from "./BlogList";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then(resp => {
      if (resp.ok) {
        resp.json().then(user => setUser(user));
      }
    });
  }, [])

  if (!user) return <Login onLogin={setUser} />

  return (
    <>
    <BrowserRouter>
    <Navbar user={user} setUser={setUser} />
      <div className="App">
        <Switch>
          <Route path="/">
            <BlogList user={user} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
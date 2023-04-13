import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import BlogList from "./BlogList";
import Navbar from "./Navbar";
import Login from "./Login";
import Home from "./Home";

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
    <Navbar user={user} setUser={setUser} />
      <div className="App">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/blogs"><BlogList user={user} /></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
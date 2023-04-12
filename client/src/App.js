import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import BlogList from "./BlogList";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then(resp => {
      if (resp.ok) {
        resp.json().then(user => setUser(user));
      }
    });
  }, [])

//   useEffect(() => {
//     fetch("/blogs")
//     .then((resp) => resp.json())
//     .then(setPosts);
// }, []);

  // const handleAddPost = (newPost) => {
  //   setPosts([...posts, newPost]);
  // }

  if (!user) return <Login onLogin={setUser} />

  return (
    <>
    <Navbar user={user} setUser={setUser} />
      <div className="App">
        <Switch>
          <Route exact path="/"><BlogList user={user} /></Route>
          {/* <Route exact path="/create"><NewPost onAddPost={handleAddPost} /></Route> */}
        </Switch>
      </div>
    </>
  );
}

export default App;
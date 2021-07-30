import Navbar from "../src/components/navbar/Navbar";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./components/singlepost/SinglePost";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Setting";
import Post from "./components/post/Post";
function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/post">{user ? <Post /> : <Register />}</Route>
        <Route path="/setting">{user ? <Setting /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Home from "./components/Home/Home";
import PostDetail from "./components/postDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <ul>
          
            <Link to="/">Home</Link>
         
          
            <Link to ="/Home">
            Home2
            </Link>
          
          
            <Link to="/about">About</Link>
          
         
            <Link to="/dashboard">Dashboard</Link>
         
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
         <Route  path = "/Home">
           <Home></Home>
         </Route>
         <Route path ="/post/:id">
          <PostDetail></PostDetail>
         </Route>
        </Switch>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;

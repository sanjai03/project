import logo from './logo.svg';
import './App.css';
import Home from './view/Home';
import Contact from './view/Contact'
import Post from './view/Post';
import  PostComment from "./view/PostComment";
import Login from "./view/LogIn";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Router>
            <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/post/:id">
          <Post />
        </Route>
        <Route exact path="/post/Comments/:id">
          <PostComment />
        </Route>
        
      </Switch>
    </Router>
    </QueryClientProvider>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;

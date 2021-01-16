import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" exact activeClassName="active">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/create" exact activeClassName="active">Create</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/create">
                        <Create/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

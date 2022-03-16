import React, {useState} from 'react';
import {Routes, Route, NavLink, useNavigate} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import BlogPosts from "./pages/BlogPosts";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    const navigate = useNavigate;

    const handleLogout = () => {
        return toggleIsAuthenticated(false);
    }

    return (
        <div className={"container"}>
            <div className={"main-nav"}>
                <ul>
                    <li>
                        <NavLink activeClassName={"active"} to="/">Home</NavLink>
                    </li>
                    <li>
                        {isAuthenticated === true &&
                            <NavLink activeClassName={"active"} to="/blogposts">Blogposts</NavLink>}
                    </li>
                    <li>
                        {(isAuthenticated === true) ?
                            <button type={"button"} onClick={handleLogout}>Uitloggen</button> :
                            <NavLink activeClassName={"active"} to={"/login"}>Login</NavLink>}
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/blogposts"} element={<BlogPosts isAuthenticated={isAuthenticated}/>}/>
                <Route path={"blogposts/:id"} element={<BlogPost  isAuthenticated={isAuthenticated}/>}/>
                <Route
                    path={"/login"}
                    element={<Login authenticate={() => toggleIsAuthenticated(true)}/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;

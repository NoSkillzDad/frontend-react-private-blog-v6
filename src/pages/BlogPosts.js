import React from "react";
import blogPosts from '../data/posts.json';
import {Link, Route, Routes, useNavigate} from "react-router-dom";

const renderPosts = (blogPosts) => {

    const capitalize = (myString) => {
        return myString.charAt(0).toUpperCase() + myString.slice(1);
    }

    return blogPosts.map(post => {
        const {id, title} = post;
        // console.log(`/blogposts/${id}`);
        return (
            <li key={`li-${id}`}>
                <Link key={`link-${id}`} to={`/blogposts/${id}`}>{capitalize(title)}</Link>
            </li>
        )
    })
}

const totalPosts = Object.keys(blogPosts).length;


const BlogPosts = ({isAuthenticated, ...rest}) => {
    const navigate = useNavigate();
    return (<>
            {isAuthenticated === true ? (
                <>
                    <div className={"content"} key="divbp">

                        <h1>Blog overzichtspagina</h1>
                        <h2>Aantal blogposts: {totalPosts}</h2>

                        <ul key="blogPosts">
                            {renderPosts(blogPosts)}
                        </ul>
                    </div>
                    <Routes>
                        <Route exact path={"/blogposts/:id"}/>
                    </Routes>
                </>
            ) : navigate("/")}
            </>
    )
}

export default BlogPosts;

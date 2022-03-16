import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import blogPosts from '../data/posts.json';
import './BlogPost.css';


const BlogPost = ({isAuthenticated, ...rest}) => {
    const {id} = useParams();

    const navigate = useNavigate;

    const capitalize = (myString) => {
        return myString.charAt(0).toUpperCase() + myString.slice(1);
    }

    const getPost = (postId) => {
        return blogPosts.find(
            (post) => post.id === postId
        )
    }

    const renderPost = (postId) => {
        const post = getPost(postId);
        const {title, content, date} = post;
        return (<>
                <div className={"post"}>
                    <h2>{capitalize(title)}</h2>
                    <h3>{date}</h3>
                    <p>{capitalize(content)}</p>
                </div>
                <div className={"post"}>
                    <Link to={"/"}>Terug naar home</Link>
                </div>
            </>
        )
    }
    return (
        <>
            {isAuthenticated === true ? (
                <div className={"content"}>
                    {renderPost(id)}
                </div>
            ) : navigate("/")}
        </>
    )
}

export default BlogPost;
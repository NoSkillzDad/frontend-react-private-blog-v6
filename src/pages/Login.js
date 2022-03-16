import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import users from '../data/users.json';

const Login = ({authenticate}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const findUser = () => {
        return users.find( ({user}) => user === userName)
    }

    const validateUser = () => {
        const user = findUser();
        return (user === undefined ? false : (user.user === userName && user.password === password) );
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateUser()) {
            authenticate();
            navigate("/");
        } else {
            alert("Name and Password combinations are invalid. Try 'guest' + 'guest'");
        }
    }

    return (
        <div className={"content"}>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <form id={"login"} onSubmit={handleSubmit}>
                <input type={"text"} id={"user-name"} placeholder={"user name"} value={userName}
                       onChange={e => setUserName(e.target.value)}/>
                <input type={"password"} id={"user-password"} placeholder={"password"} value={password}
                       onChange={e => setPassword(e.target.value)}/>
                <button type={"submit"}>Login</button>
            </form>
        </div>
    )
}

export default Login;
import React from "react";
import { useNavigate } from 'react-router-dom';

const Login = ({authenticate}) => {

    const navigate = useNavigate();

    const handleToggleLoggedIn = () => {
      authenticate();
      navigate("/");
    }
    
    return (
        <div className={"content"}>
            <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen!</p>
            <button onClick={handleToggleLoggedIn}>Login</button>
        </div>
    )
}

export default Login;
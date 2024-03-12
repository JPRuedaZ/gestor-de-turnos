import { useState } from "react";

const Login = () => {

    const [formLogin, setFormLogin] = useState({
        username: "",
        password: ""
    });

    return (
        <div>
            <h2>Inicia Sesión</h2>
            <label>Username</label>
            <input type="text" name="username" value={formLogin.username} placeholder="Write your username"/>
            <label>Password</label>
            <input type="password" name="password" value={formLogin.password} placeholder="Write your password"/>
            <button>Login</button>
        </div>
    )
}

export default Login;
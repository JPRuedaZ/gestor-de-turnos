import { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const initialState = {
        username: "",
        password: ""
    }

    const [formLogin, setFormLogin] = useState(initialState);

    const handleOnchange = (event) => {
        console.log(event);
        const {value, name} = event.target;
        setFormLogin({...formLogin, [name]: value});
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:3000/users/login", formLogin)
        .then(res => res.data)
        .then(data => {
            dispatch(setUserData(data));
            alert(`Bienvenido ${data.user.name}✅`);
            navigate("/home");
        })
        .catch((err) => alert(err.response.data));
    }

    return (
        <div className={styles.containerLogin}>
            <div className={styles.login}>
            <h2 className={styles.title}>Inicia Sesión</h2>
            <label className={styles.label}>Username</label>
            <input className={styles.input} type="text" name="username" value={formLogin.username} placeholder="Write your username" onChange={handleOnchange}/>
            <label className={styles.label}>Password</label>
            <input className={styles.input} type="password" name="password" value={formLogin.password} placeholder="Write your password" onChange={handleOnchange}/>
            <button className={styles.button} type="submit" onClick={handleOnSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Login;
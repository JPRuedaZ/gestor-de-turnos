import { useState } from "react";
import axios from "axios";
import validateForm from "../../helpers/validation";
import styles from "./Register.module.css";
import fonendo from "../../assets/fonendo.png";
import maletinmedico from "../../assets/maletinmedico.png";
import revisionmedica from "../../assets/revisionmedica.png";
import tarromedicinas from "../../assets/tarromedicinas.png";
import inyeccion from "../../assets/inyeccion.png";
import virus from "../../assets/virus.png";
import dna from "../../assets/dna.png";



const Register = () => {
    const initialState = {
        name: "",
        birthdate: "",
        nDni: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        
    };
    const [formRegister, setFormRegister] = useState(initialState);

    const [errors, setErrors] = useState(initialState);

    
        
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name: formRegister.name,
            birthdate: formRegister.birthdate,
            nDni: formRegister.nDni,
            email: formRegister.email,
            username: formRegister.username,
            password: formRegister.password
        }
        
        axios.post("https://gestor-turnos-back.onrender.com/users/register",newUser)
        .then(res => res.data)
        .then(userCreate => {
            alert(`Ya puedes iniciar sesion ${userCreate.name}✅`);
            setFormRegister(initialState);
        })
        .catch((err) => alert(err.response.data));
    };

    const handleOnchange = (event) => {
        const {value, name} = event.target;
        setFormRegister({...formRegister, [name]: value});
        setErrors(validateForm({...formRegister, [name]: value}));
    };

    const handleOnReset = (event) => {
        event.preventDefault();
        setFormRegister(initialState)
    };

    const formData = [
        {label: "Name: ", name: "name", type: "text",  placeholder: "Write your full name"},
        {label: "Email: ", name: "email", type: "email",  placeholder: "Write your email"},
        {label: "Birthdate: ", name: "birthdate", type: "date",  placeholder: "Write your birthdate"},
        {label: "nDni: ", name: "nDni", type: "string",  placeholder: "Write your nDni"},
        {label: "Username: ", name: "username", type: "text",  placeholder: "Write your username"},
        {label: "Password: ", name: "password", type: "password",  placeholder: "Write your password"},
        {label: "Confirm Password: ", name: "confirmPassword", type: "password", placeholder: "Confirm your password"},
    ];

    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <img src={fonendo} alt="doctor"/>
                <img src={maletinmedico} alt="medical"/>
                <img src={revisionmedica} alt="doctor"/>
                <img src={tarromedicinas} alt="doctor"/>
                <img src={inyeccion} alt="doctor"/>
                <img src={virus} alt="doctor"/>

            </div>
            <form>
                <h2>Formulario de Registro</h2>
                {
                    formData.map (({label, name, type,placeholder}) => {
                        return (
                            <div key={name} className={styles.formRegister}>
                                <label className={styles.formLabel} htmlFor={name}>{label}</label>
                                <input className={styles.formInput} type={type} id={name} name={name} value={formRegister[name]} placeholder={placeholder} onChange={handleOnchange}/>
                                {errors[name] && <p style={{color: "red"}}>{errors[name]}</p>}
                            </div>
                            
                        )
                    })
                }
                <button className={styles.button} type="submit" disabled={Object.keys(errors).some(elem => !errors[elem])} onClick={handleOnSubmit}>Register</button>
                <button className={styles.button} type="reset" onClick={handleOnReset}>Reset</button>
            </form>
        </div>
    )
}

export default Register;
import { useState } from "react";
import styles from "./NewAppointment.module.css";

const NewAppointment = () => {

    const initialState = {
        date: "",
        time: "",
        userId: "",
        description: "",
    };


const [formAppointment, setFormAppointment] = useState(initialState);
const [errors, setErrors] = useState(initialState);

const handleOnSubmit = (event) => {
    
}

const handleOnchange = (event) => {
    
}

const formAppointmentData = [
    {label: "Date: ", name: "date", type: "date",  placeholder: "Write your date"},
    {label: "Time: ", name: "time", type: "time",  placeholder: "Write your time"},
    {label: "Description: ", name: "description", type: "text",  placeholder: "Write your description"},
]

    return (
        <div>
            <h1>New Appointment</h1>
            <form>
    {
        formAppointmentData.map(({label, name, type, placeholder}) => (
            <div key={name} className={styles.formAppointment}>
            <label className={styles.formAppointmentLabel} htmlFor={name}>{label}</label>
            <input className={styles.formAppointmentInput} type={type} id={name} name={name} value={formAppointment[name]} placeholder={placeholder} onChange={handleOnchange}></input>
            </div>
        ))
    }
            </form>
        </div>

    )
}

export default NewAppointment;
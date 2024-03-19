import { useState } from "react";
import styles from "./NewAppointment.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
import validateHours from "../../helpers/validateHours";
import validateDescription from "../../helpers/validateDescription";
import validateAppointment from "../../helpers/validateAppointment";
const NewAppointment = () => {

    const actualUserId = useSelector((state) => state.actualUser?.userData?.user?.id);

    const initialState = {
        date: "",
        time: "",
        userId: actualUserId,
        description: "",
    };


const [formAppointment, setFormAppointment] = useState(initialState);
const [errors, setErrors] = useState(initialState);

const handleOnSubmit = (event) => {
    event.preventDefault();
    const newAppointment = {
        date: formAppointment.date,
        time: formAppointment.time,
        userId: formAppointment.userId,
        description: formAppointment.description
    }

    axios.post("http://localhost:3000/appointments/schedule",newAppointment)
    .then(res => res.data)
    .then(appointmentCreate => {
        alert(`Se agendara la cita el ${appointmentCreate.date} a las ${appointmentCreate.time}✅`);
        setFormAppointment({
            date: "",
            time: "",
            userId: actualUserId,
            description: "",
        });
        
    })
    .catch((err) => alert(err.response.data));
}

const handleOnchange = (event) => {
    const {value, name} = event.target;
    setFormAppointment({...formAppointment, [name]: value});
    setErrors(validateAppointment({...formAppointment, [name]: value}));
}
    return (
        <div>
            <h1>New Appointment</h1>
            <form>
                <div>
                    <label>Date: </label>
                    <input type="date" id="date" name="date" value={formAppointment.date} onChange={handleOnchange} min={new Date().toISOString().split("T")[0]} />
                    {errors.date && <p className={styles.error}>{errors.date}</p>}
                    
                </div>
                <div>
                    <label>Time: </label>
                    <select name="time" value={formAppointment.time} onChange={handleOnchange}>
                    {validateHours.map((hour) => <option key={hour} value={hour}>{hour}</option>)}
                    </select>
                    {errors.time && <p className={styles.error}>{errors.time}</p>}
                </div>
                <div>
                    <label>Description: </label>
                    <select name="description" value={formAppointment.description} onChange={handleOnchange}>
                    {validateDescription.map((description) => <option key={description} value={description}>{description}</option>)}
                    </select>
                    {errors.description && <p className={styles.error}>{errors.description}</p>}
                </div>
                <button className={styles.formAppointmentButton} disabled={errors.date || errors.time || errors.description} id="submitButton" type="submit" onClick={handleOnSubmit}>Create </button>
            </form>
        </div>

    )
}

export default NewAppointment;
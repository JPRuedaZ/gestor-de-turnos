import { useEffect} from "react";
import Appointment from "../../components/Appointment/Appointment.jsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice.js";
import styles from "./MyAppointments.module.css";
import { Link, useNavigate } from "react-router-dom";

const MyAppointments = () => {

const actualUserId = useSelector((state) => state.actualUser?.userData?.user?.id);
const appointmentsUser = useSelector((state) => state.actualUser?.userAppointments);
const loginVerification = useSelector((state) => state.actualUser?.userData?.login);

const navigate = useNavigate();
const dispatch = useDispatch();

useEffect(() => {
    if(!loginVerification) {
        navigate("/login");
    }
}, [])

useEffect(() => {
    axios.get(`https://gestor-turnos-back.onrender.com/users/${actualUserId}`)
    .then(res => res.data.appointments)
    .then(appointments =>dispatch(setUserAppointments(appointments)))

    .catch(err => console.log(err))
}, [])   

    return (
        <div>
            <h1>My Appointments</h1>
            <button className={styles.newAppointment}> <Link to="/appointments/new">Crear nueva cita</Link></button>
            {appointmentsUser.length === 0 ? <h3>No tienes turnos agendados</h3> : appointmentsUser.map(turno => (<Appointment key={turno.id} turnoData={turno}/>)) }
        </div>
        
    )
}

export default MyAppointments;
import { useEffect, useState } from "react";
import Appointment from "../../components/Appointment/Appointment.jsx";
import axios from "axios";

const MyAppointments = () => {
const [turnos, setTurnos] = useState([]);

useEffect(() => {
    axios.get('http://localhost:3000/appointments')
    .then(res => res.data)
    .then(data => setTurnos(data))
    .catch(err => console.log(err))
}, [])   

    return (
        <div>
            <h1>My Appointments</h1>
           {turnos.map(turno => (<Appointment key={turno.id} turnoData={turno}/>))}
           {console.log(turnos)}
        </div>
    )
}

export default MyAppointments;
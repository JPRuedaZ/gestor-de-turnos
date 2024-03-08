import { useState } from "react";
import Appointment from "../../components/Appointment/Appointment.jsx";
import misTurnos from "../../helpers/misTurnos.js";

const MyAppointments = () => {
const [turnos, setTurnos] = useState(misTurnos);

    return (
        <div>
            <h1>My Appointments</h1>
           {turnos.map(turno => (<Appointment key={turno.id} turnoData={turno}/>))}
        </div>
    )
}

export default MyAppointments;
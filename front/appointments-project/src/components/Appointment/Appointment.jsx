import { useState } from "react";
import styles from "./Appointment.module.css"

const Appointment = ({turnoData}) => {
    let {id,date,time,status,description} = turnoData;
    const [statusA, setStatus] = useState(true);
    const [status2, setStatus2] = useState(status);
    const handlerClickStatus = () => {
        if (statusA) {
            setStatus(false);
            setStatus2("Inactive");
        } else {
            setStatus(true);
            setStatus2("Active");
        }
/* Aca va la peticion PUT al back =>axios.put(`http://localhost:3000/appointments/${id}`, {status: statusA})*/
    }
    
    return (
        <div className={styles.appointmentContainer}>
            <ul className={styles.appointmentList}>
                <li>{id}</li>
                <li>{date}</li>
                <li>{time}</li>
                {statusA? (<li className={styles.Active} onClick={handlerClickStatus}>{status2}</li>):(<li className={styles.Inactive} onClick={handlerClickStatus}>{status2}</li>)}
                <li>{description}</li>
            </ul>
        </div>
    )
}

export default Appointment;
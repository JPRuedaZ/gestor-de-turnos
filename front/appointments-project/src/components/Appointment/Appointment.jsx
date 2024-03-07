import styles from "./Appointment.module.css"

const Appointment = (turno) => {
    const {id,date,time,status,description} = turno.turno
    return (
        <div className={styles.appointmentContainer}>
            <ul className={styles.appointmentList}>
                <li>{id}</li>
                <li>{date}</li>
                <li>{time}</li>
                <li>{status}</li>
                <li>{description}</li>
            </ul>
        </div>
    )
}

export default Appointment;
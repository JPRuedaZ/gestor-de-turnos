import { useEffect, useState } from "react";
import styles from "./Appointment.module.css";
import zoomImage from "../../assets/zoom.png";
import switchImage from "../../assets/switch.png";
import axios from "axios";
import Detail from "../Detail/Detail";
import verMenos from "../../assets/vermenos.png";

const Appointment = ({turnoData}) => {
    let {id,date,time,status,description} = turnoData;
    const [statusA, setStatus] = useState(true);
    const [status2, setStatus2] = useState(status);
    const [renderDetail, setRenderDetail] = useState(false);

    useEffect(() => {
        if (status2 === "Cancelled") {
            setStatus(false);
        }
    },[]);
    
    const handlerClickStatus = (id) => {
        if (statusA) {
            setStatus(false);
            setStatus2("Cancelled");
            axios.put(`http://localhost:3000/appointments/cancel`, {id})
        } 
    }
    const handlerClickDetail = () => {
        setRenderDetail(!renderDetail);
    }

    date = new Date(date);
    const formatDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

    
    return (
        <div className={styles.appointmentContainer} >
            <ul className={styles.appointmentList}>
                <li>{formatDate}</li>
                <li>{time}</li>
                {statusA? (<li className={styles.Active}>{status2}</li>):(<li className={styles.Inactive} onClick={handlerClickStatus}>{status2}</li>)}
                <button className={styles.zoomButton} onClick={handlerClickDetail}><img src={renderDetail ? verMenos : zoomImage} alt="zoom" /></button>
                <button className={styles.switchButton} onClick={() => handlerClickStatus(id)}><img src={switchImage} alt="switch" /></button>
            </ul>
            {renderDetail && <Detail description={description}/> }
        
        </div>
    )
}

export default Appointment;
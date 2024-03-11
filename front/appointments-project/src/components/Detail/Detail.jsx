import styles from "./Detail.module.css";
import images from "../../helpers/images";
import texts from "../../helpers/texts";

const Detail = ({turnoData,formatDate}) => {
    let {time,description} = turnoData;

    let myImagen = images.find(image => image.ref === description);
    let myText = texts.find(text => text.ref === description);


    return (
        <div className={styles.detailContainer}>
            <div className={styles.detailImageText}>
                <img src={myImagen ? myImagen.src : ""} alt="cita" />
                <span>{myText ? myText.message : ""}</span>
            </div>
            <div className={styles.detailAppointment}>
                <h2>Detalles cita</h2>
            <span><b>Servicio:</b> {description}</span>
            <span><b>Fecha:</b> {formatDate}</span>
            <span><b>Hora:</b> {time}</span>
            </div>
            
        </div>
    )
}

export default Detail;
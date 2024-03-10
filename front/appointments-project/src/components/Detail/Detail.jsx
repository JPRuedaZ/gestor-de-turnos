import styles from "./Detail.module.css";
import images from "../../helpers/images";
import texts from "../../helpers/texts";

const Detail = ({description}) => {

    let myImagen = images.find(image => image.ref === description);
    let myText = texts.find(text => text.ref === description);

    return (
        <div className={styles.detailContainer}>
            <img src={myImagen ? myImagen.src : ""} alt="cita" />
            <span>{myText ? myText.message : ""}</span>
            <p>{description}</p>
        </div>
    )
}

export default Detail;
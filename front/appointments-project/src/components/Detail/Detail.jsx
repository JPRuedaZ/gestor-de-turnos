// import { useEffect, useState } from "react";
// import verMenos from "../../assets/vermenos.png";
// import styles from "./Detail.module.css";
// import axios from "axios";

// const Detail = ({handleOnClose}) => {
//     const [turno, setTurno] = useState({});

//     useEffect(() => {
//         axios.get(`http://localhost:3000/appointments/${id}`)
//         .then(res => res.data)
//         .then(data => setTurno(data))
//         .catch(err => console.log(err))
//     }, [id])

//     return (
//         <div className={styles.detailContainer}>
//             <button className={styles.verMenos}><img src={verMenos} alt="vermenos" /></button>
//         </div>
//     )
// }

// export default Detail;
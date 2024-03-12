import styles from "./Home.module.css";
import medical from "../../assets/medicos.jpg";
const Home = () => {
    return (
        <div>
            <h1>Medical Service Page</h1>
            <div>
                <img src={medical} alt="doctor"/>
            </div>
        </div>
    
    )
}

export default Home;
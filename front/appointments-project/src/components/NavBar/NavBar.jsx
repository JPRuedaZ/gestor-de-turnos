import styles from "./NavBar.module.css";
import profileImage from "../../assets/profile.png";
import hospitalLogo from "../../assets/medical-logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
    <div className={styles.navBar}>
        <div className={styles.logo}>
            <img src={hospitalLogo}></img>
        </div>
        <div>
            <ul className={styles.navBarList}>
                <Link to="/home">HOME</Link>
                <Link to="/appointments">APPOINTMENTS</Link>
                <Link to="/services">SERVICES</Link>
                <Link to="/about">ABOUT US</Link>
            </ul>
        </div>
        <div className={styles.register}>
            <button><Link to="/register">REGISTER</Link></button>
        </div>
        <div className={styles.login}>
           <button><Link to="/login">LOGIN</Link></button> 
        </div>
        <div className={styles.profile}>
            <img src={profileImage}></img>
        </div>
    </div>
    )
}

export default NavBar;
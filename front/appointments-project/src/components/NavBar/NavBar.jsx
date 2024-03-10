import styles from "./NavBar.module.css";
import profileImage from "../../assets/profile.png";
import hospitalLogo from "../../assets/medical-logo.png";
const NavBar = () => {
    return (
    <div className={styles.navBar}>
        <div className={styles.logo}>
            <img src={hospitalLogo}></img>
        </div>
        <div>
            <ul className={styles.navBarList}>
                <li>HOME</li>
                <li>APPOINTMENTS</li>
                <li>SERVICES</li>
                <li>ABOUT US</li>
            </ul>
        </div>
        <div className={styles.profile}>
            <img src={profileImage}></img>
        </div>
    </div>
    )
}

export default NavBar;
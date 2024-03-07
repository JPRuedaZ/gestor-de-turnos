import styles from "./NavBar.module.css";
import homeImage from "../../assets/home.png";
import entradasImage from "../../assets/tickets.png";
import profileImage from "../../assets/profile.png";
import companyImage from "../../assets/company.png";
import serviceImage from "../../assets/services.png";
import hospitalLogo from "../../assets/medical-logo.png";
const NavBar = () => {
    return (
    <div className={styles.navBar}>
        <div className={styles.logo}>
            <img src={hospitalLogo}></img>
        </div>
        <div>
            <ul className={styles.navBarList}>
                <li><img src={homeImage}/></li>
                <li><img src={entradasImage}/></li>
                <li><img src={serviceImage}/></li>
                <li><img src={companyImage}/></li>
            </ul>
        </div>
        <div className={styles.profile}>
            <img src={profileImage}></img>
        </div>
    </div>
    )
}

export default NavBar;
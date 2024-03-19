import styles from "./NavBar.module.css";
import profileImage from "../../assets/profile.png";
import hospitalLogo from "../../assets/medical-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments, setUserData } from "../../redux/userSlice";
const NavBar = () => {

    const login = useSelector((state) => state.actualUser.userData.login);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
    const confirmed = window.confirm("¿Desea cerrar sesión?")
    if(confirmed) {
      dispatch(setUserData({}));
      dispatch(setUserAppointments([]));
      navigate("/home");
    }
}

    return (
    <div className={styles.navBar}>
        <div className={styles.logo}>
            <img src={hospitalLogo}></img>
        </div>
        <div>
            <ul className={styles.navBarList}>
                <Link to="/home">HOME</Link>
                {login ? <Link to="/appointments">APPOINTMENTS</Link> : null}
                <Link to="/services">SERVICES</Link>
                <Link to="/about">ABOUT US</Link>
            </ul>
        </div>
        {login ? null : <div className={styles.register}>
           <button><Link to="/register">REGISTER</Link></button>
        </div>}
        {login? <div className={styles.logout}>
           <button onClick={handleLogout}><Link to="/home">LOGOUT</Link></button> 
        </div> : <div className={styles.login}>
           <button><Link to="/login">LOGIN</Link></button> 
        </div>}
        <div className={styles.profile}>
        {login ? <img src={profileImage}></img> : null} 
        </div>
    </div>
    )
}

export default NavBar;
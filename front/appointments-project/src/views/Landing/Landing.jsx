import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from './Landing.module.css';
import doctor from '../../assets/doctor.gif';

const Landing = () => {
    const [speech, setSpeech] = useState([
        { text: "¡Hola! Bienvenido a Medical Services.", duration: 3000 },
        { text: "Soy el Doctor Simon y aquí en Medical Services estamos para ayudarte.", duration: 3500 },
        { text: "Accede a nuestro portal para ver nuestros servicios.", duration: 4000 },
        { text: "Reserva una cita", duration: 4500 }


    ]);

    const [currentSpeechIndex, setCurrentSpeechIndex] = useState(0);

    useEffect(() => {
        const changeSpeech = () => {
            setCurrentSpeechIndex(prevIndex => (prevIndex + 1) % speech.length);
        };

        const speechTimer = setTimeout(changeSpeech, speech[currentSpeechIndex].duration);

        return () => clearTimeout(speechTimer);
    }, [currentSpeechIndex, speech]);

    return (
        <div className={styles.container}>
            <div className={styles.characterAnimationContainer}>
                <img src={doctor} alt="doctor" className={styles.characterAnimation}></img>
                <div className={styles.speechBubble}>
                    {speech[currentSpeechIndex].text}
                </div>
            </div>
            <div className={styles.button}>
                <Link to="/home">Explora nuestro portal</Link>
            </div>
        </div>
    );
}

export default Landing;

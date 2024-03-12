import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    const [error, setTimer] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(error - 1);
        }, 1000);
        if (error === 0) {
            clearInterval(interval);
            navigate("/home");
        }
        return () => clearInterval(interval);
    }, [error]);
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Redirecting to home in {error} seconds.....</p>
        </div>
    );
}

export default Error;
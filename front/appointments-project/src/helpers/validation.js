const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

const validateForm = ({name, birthdate, nDni, email, username, password, confirmPassword}) => {
    const errors = {};
    if(!name) errors.name = "Name is required";
    if(!birthdate) errors.birthdate = "Birthdate is required";
    if(!nDni) errors.nDni = "nDni is required";
    if(!email) errors.email = "Email is required";
    else{
        if(!emailRegex.test(email)) errors.email = "Email is not valid";
    }
    if(!username) errors.username = "Username is required";
    if(!password) errors.password = "Password is required";
    if(!confirmPassword) errors.confirmPassword = "Confirm Password is required";
    if(password !== confirmPassword) errors.confirmPassword = "Passwords are not the same";
    return errors;
};


export default validateForm;
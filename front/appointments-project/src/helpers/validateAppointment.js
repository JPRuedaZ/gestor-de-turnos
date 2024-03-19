const validateAppointment = ({date, time, description}) => {
    const errors = {};
    const today = new Date();
    let ayer = today.getDate() - 1;
  const appointmentDate = new Date(date);
  const dayOfWeek = appointmentDate.getDay();

  if (appointmentDate <= ayer) errors.date = "No se pueden pedir fechas pasadas";
  if (dayOfWeek === 6 || dayOfWeek === 5)
    errors.date = "No hay turnos en fin de semana";

  if (!time) errors.time = "time is required";
  if (!description) errors.description = "description is required";
  return errors;
};


export default validateAppointment;
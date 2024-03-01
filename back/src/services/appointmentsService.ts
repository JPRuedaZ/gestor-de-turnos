import IAppointments from "../interfaces/IAppointments";
import { appointments } from "../utils/appointments";

export const getAppointments = async (): Promise<IAppointments[]> => {
    // const dataA :IAppointments[] = await appointments;
    return appointments;
}

export const searchIdAppointment = async (id: number): Promise<IAppointments | undefined> => {
    const dataA: IAppointments[] = await getAppointments();
    const appointment: IAppointments | undefined = dataA.find((appointment) => appointment.id === id);
    return appointment
}

export const createAppointment = async ({date, hour, userId}: IAppointments): Promise<number> => {
    const newTurn: IAppointments = {
        id: appointments[appointments.length].id + 1,
        date,
        hour,
        userId,
        status: 'Active'
    }
    await appointments.push(newTurn);
    return newTurn.id
}

export const modifyAppointment = async (id: number): Promise<void> => {
    const appointment: IAppointments | undefined = await searchIdAppointment(id);
    if(appointment){
        appointment.status = 'Cancelled';
    }
}

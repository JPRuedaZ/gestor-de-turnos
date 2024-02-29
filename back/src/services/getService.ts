import IAppointments from "../interfaces/IAppointments";
import IUsers from "../interfaces/IUsers";
import { users } from "../utils/users";
import { appointments } from "../utils/appointments";


export const getUsers = async (): Promise<IUsers[]> => {
    const dataU = await users;
    return dataU;
}

export const getAppointments = async (): Promise<IAppointments[]> => {
    const dataA = await appointments;
    return dataA;
}

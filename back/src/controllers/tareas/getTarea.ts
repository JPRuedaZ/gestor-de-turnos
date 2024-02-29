import { Request, Response } from "express"; 
import {appointments} from "../../utils/appointments";
import {getAppointments, getUsers} from "../../services/getService";




export const getTareasUsers = async (req: Request, res: Response): Promise<void> => {
    const users = await getUsers();
    res.status(200).json(users);
}


export const getTareasAppointments = async (req: Request, res: Response): Promise<void> => {
    const appointments = await getAppointments();
    await res.status(200).json(appointments);
}

// export default {
//     getTareasUsers,
//     getTareasAppointments
// };
import { Request, Response } from "express"; 
import {users} from "../../utils/users";
import {appointments} from "../../utils/appointments";
import IAppointments from "../../interfaces/IAppointments";
import IUsers from "../../interfaces/IUsers";



export const postTareasUsers = async (req: Request, res: Response): Promise<void> => {
    const {name, email, password}: IUsers = req.body;

    users.push({
        id: String(users.length + 1),
        name,
        email,
        password
    });
   await res.status(200).json(users);
}


export const postTareasAppointments = async (req: Request, res: Response): Promise<void> => {
    const {date, hour, userId}: IAppointments = req.body;

    appointments.push({
        id: String(appointments.length + 1),
        date,
        hour,
        userId
    });
   await res.status(200).json(appointments);
}
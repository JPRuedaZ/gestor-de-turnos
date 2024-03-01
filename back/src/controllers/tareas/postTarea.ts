import { Request, Response } from "express"; 
import { createUser } from "../../services/usersService";
import IUserDto from "../../dto/UserDto";
import ICredentialDto from "../../dto/CredentialDto";
import { createAppointment } from "../../services/appointmentsService";

export const createUserTarea = async (req: Request, res: Response): Promise<void> => {
    try {
        const newCred : ICredentialDto & IUserDto = req.body;
        const credentials = await createUser(newCred);
        res.status(200).json(credentials);
    } catch (error) {
        res.status(400).json(`Mensaje de ${error}`);
    }
}

export const createAppointmentTarea = async (req: Request, res: Response): Promise<void> => {
    try {
        const newAppointment = req.body;
        const appointments = await createAppointment(newAppointment);
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json(`Mensaje de ${error}`);
    }
}




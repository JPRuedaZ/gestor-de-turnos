import { Request, Response } from "express"; 
import { createUser, findUserByCredentialId } from "../../services/usersService";
import IUserDto from "../../dto/UserDto";
import ICredentialDto from "../../dto/CredentialDto";
import { createAppointment } from "../../services/appointmentsService";
import IAppointmentDto from "../../dto/AppointmentDto";
import { validarCredenciales } from "../../services/credentialsService";

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
        const newAppointment: IAppointmentDto = req.body;
        const appointments = await createAppointment(newAppointment);
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json(`Mensaje de ${error}`);
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const {username, password} = req.body;
    try {
        const credential = await validarCredenciales({username, password});
        if(credential === null) throw new Error("Credenciales incorrectas");
        const user = await findUserByCredentialId(credential.id);
        res.status(200).json({login: true, user});
    } catch (error) {
        res.status(500).json(`Mensaje de ${error}`);	
    }
}




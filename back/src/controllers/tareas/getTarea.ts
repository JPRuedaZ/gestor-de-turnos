import { Request, Response } from "express"; 
import { getUsers, searchIdUser } from "../../services/usersService";
import { getAppointments, searchIdAppointment } from "../../services/appointmentsService";
import { getCredentials } from "../../services/credentialsService";





export const getTareasUsers = async (req: Request, res: Response): Promise<void> => { try {
    const users = await getUsers();
    res.status(200).json(users);
} catch (error) {
    res.status(500).json({message: "Error del servidor"});
}
    
}


export const getTareasAppointments = async (req: Request, res: Response): Promise<void> => {
    try {
        const appointments = await getAppointments();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(404).json({message: "No se encontraron turnos"});
    }
    
}

export const getTareaCredentials = async (req: Request, res: Response): Promise<void> => {
    try {
        const credentials = await getCredentials();
        res.status(200).json(credentials);
    } catch (error) {
        res.status(500).json({message: "Error del servidor"});
    }
}

export const getTareaUserId = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params
        const users = await searchIdUser(parseInt(id));
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message: "Usuario no encontrado"});
    }
}

export const getTareaAppointmentId = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params
        const appointments = await searchIdAppointment(parseInt(id));
        res.status(200).json(appointments);
    } catch (error) {
        res.status(404).json({message: "Turno no encontrado"});
    }
}



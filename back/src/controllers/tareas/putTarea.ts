import { Request, Response } from "express"; 
import { modifyAppointment } from "../../services/appointmentsService";

export const modifyAppointmentTarea = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.body
        const appointments = await modifyAppointment(parseInt(id));
        res.status(200).json(appointments);
    } catch (error) {
        res.status(404).json({message: "Turno no encontrado"});
    }
}
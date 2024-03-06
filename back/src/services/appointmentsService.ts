import IAppointmentDto from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { appointmentRepository } from "../repositories/RAppointments";
import { searchIdUser } from "./usersService";


export const getAppointments = async (): Promise<Appointment[]> => {
    const dataA :Appointment[] = await appointmentRepository.find({
        relations: {
            user: true
        }
    });
    return dataA;
}

export const searchIdAppointment = async (id: number): Promise<Appointment[] | null> => {
    const appointment: Appointment[] | null = await appointmentRepository.find({ where: {id}, relations: {user: true}});
    if(!appointment) throw new Error("Turno no encontrado");
    return appointment;
}

export const createAppointment = async (appointmentData: IAppointmentDto): Promise<Appointment> => {
    const user = await searchIdUser(appointmentData.userId)
    const newTurn: Appointment = await appointmentRepository.create(appointmentData);
    if (user) {
        newTurn.user = user
    } 
    await appointmentRepository.save(newTurn);
    return newTurn;	
}

export const modifyAppointment = async (id: number): Promise<Appointment | null> => {
    const appointment: Appointment | null = await appointmentRepository.findOneBy({id});
    if(appointment !== null){
        appointment.status = 'Cancelled';
    } else{
        throw new Error("Turno no encontrado");
    }
    await appointmentRepository.save(appointment);
    return appointment;
}

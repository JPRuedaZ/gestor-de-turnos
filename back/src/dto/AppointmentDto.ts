import { User } from "../entities/User";

export default interface IAppointmentDto {
    date: string;
    time: string;
    userId: number;
    description: string;
}
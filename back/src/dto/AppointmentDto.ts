import { TStatus } from "../interfaces/IAppointments";

export default interface IAppointmentDto {
    date: string | number | Date;
    hour: string | number | Date;
    status: TStatus;
}
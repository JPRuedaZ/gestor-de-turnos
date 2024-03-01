import IUsers from "./IUsers";

export type TStatus = 'Active' | 'Cancelled';
export default interface IAppointments {
    id: number;
    date: string | number | Date;
    hour: string | number | Date;
    userId: IUsers['id'];
    status: TStatus;
}
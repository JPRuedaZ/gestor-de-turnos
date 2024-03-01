import ICredentials from "./ICredentials";
export default interface IUsers {
    id: number;
    name: string;
    email: string;
    birthdate: string | number | Date;
    nDni: number | string;
    credentialsId: ICredentials['id'];
}
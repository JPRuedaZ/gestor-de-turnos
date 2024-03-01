export default interface IUserDto {
    name: string;
    email: string;
    birthdate: string | number | Date;
    nDni: number | string;
}
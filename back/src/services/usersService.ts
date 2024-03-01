import ICredentialDto from "../dto/CredentialDto";
import IUserDto from "../dto/UserDto";
import IUsers from "../interfaces/IUsers";
import { users } from "../utils/users";
import { createCredentials } from "./credentialsService";



export const getUsers = async (): Promise<IUsers[]> => {
    // const dataU: IUsers[] = await users;
    return users;
}

export const searchIdUser = async (id: number): Promise<IUsers | undefined> => {
    const dataU: IUsers[] = await getUsers();
    const user: IUsers | undefined = dataU.find((user) => user.id === id);
    return user
}

//FUNCION DE SERVICIOS CREAR USUARIOS
export const createUser = async (userData: IUserDto & ICredentialDto): Promise<IUsers> => {
   const credentials = await createCredentials(userData);
    const newUser: IUsers = {
        id: users.length + 1,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId: credentials
    }
    users.push(newUser);
    return newUser;
}
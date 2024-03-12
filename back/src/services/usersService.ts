import ICredentialDto from "../dto/CredentialDto";
import IUserDto from "../dto/UserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { credentialRepository } from "../repositories/RCredentials";
import { userRepository } from "../repositories/RUsers";
import { createCredentials } from "./credentialsService";



export const getUsers = async (): Promise<User[]> => {
    const allTheUsers: User[] = await userRepository.find({
        relations: {
            appointments: true
        }
    });
    return allTheUsers;
}

export const searchIdUser = async (id: number): Promise<User | null> => {
    const user: User | null = await userRepository.findOne({ where: {id}, relations: {appointments: true}});
    if(!user) throw new Error("Usuario no encontrado");
    return user
}

//FUNCION DE SERVICIOS CREAR USUARIOS
export const createUser = async (userData: IUserDto & ICredentialDto): Promise<User> => {
    const existingEmail: User | null = await userRepository.findOne({ where: { email: userData.email } });
    const existingUsername: Credential | null = await credentialRepository.findOne({ where: { username: userData.username } });
    if (existingUsername || existingEmail) {
        throw new Error('El usuario ya se encuentra registrado.');
    }
    const newUser: User = userRepository.create(userData);
    const newCredential: Credential = await createCredentials({
        username: userData.username,
        password: userData.password
    });
    await userRepository.save(newUser);
    newUser.credentials = newCredential
    await userRepository.save(newUser);

    return newUser;
}

export const findUserByCredentialId = async (credentialId: number): Promise<User | null> => {
        const user: User | null = await userRepository.findOneBy({credentials : {id: credentialId}});
        return user
}
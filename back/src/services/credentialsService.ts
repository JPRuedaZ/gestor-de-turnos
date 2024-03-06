import ICredentialDto from "../dto/CredentialDto";
import { Credential } from "../entities/Credential";
import { credentialRepository } from "../repositories/RCredentials";



export const getCredentials = async (): Promise<Credential[]> => {
    const dataC: Credential[] = await credentialRepository.find();
    return dataC;
}

// FUNCION DE SERVICIOS CREAR CREDENCIALES
export const createCredentials = async (dataC: ICredentialDto): Promise<Credential> => {
    const newCred: Credential = credentialRepository.create(dataC);
    await credentialRepository.save(newCred);
    return newCred
}

export const validarCredenciales = async (ICredentialDto: ICredentialDto): Promise<Credential| null> => {
    const {username, password} = ICredentialDto
    const foundCredential : Credential | null = await credentialRepository.findOneBy({username: username});
    if(!foundCredential) throw new Error("Usuario no encontrado");
    if(password !== foundCredential.password) throw new Error("Contraseña incorrecta");
    return foundCredential
}



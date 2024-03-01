import ICredentialDto from "../dto/CredentialDto";
import ICredentials from "../interfaces/ICredentials";
import { credentials } from "../utils/credentials";


export const getCredentials = async (): Promise<ICredentials[]> => {
    const dataC: ICredentials[] = await credentials;
    return dataC;
}

// FUNCION DE SERVICIOS CREAR CREDENCIALES
export const createCredentials = async (dataC: ICredentialDto): Promise<number> => {
    const newCred: ICredentials = {
        id:credentials.length + 1,
        username: dataC.username,
        password: dataC.password	
    }
    await credentials.push(newCred);
    return newCred.id
}

export const validarCredenciales = async ({username, password}: ICredentials): Promise<number | undefined> => {
    const credentials : ICredentials[] = await getCredentials();
    const cred : ICredentials | undefined = credentials.find(cred => cred.username === username && cred.password === password);
    return cred?.id
}


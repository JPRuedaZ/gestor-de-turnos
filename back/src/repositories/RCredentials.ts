import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";



export const credentialRepository = AppDataSource.getRepository(Credential);
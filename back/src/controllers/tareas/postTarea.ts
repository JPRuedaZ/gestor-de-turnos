import { Request, Response } from "express"; 
import { createUser } from "../../services/usersService";
import IUserDto from "../../dto/UserDto";
import ICredentialDto from "../../dto/CredentialDto";

export const createUserTarea = async (req: Request, res: Response): Promise<void> => {
    try {
        const newCred : ICredentialDto & IUserDto = req.body;
        const credentials = await createUser(newCred);
        res.status(200).json(credentials);
    } catch (error) {
        res.status(500).json({message: "Error del servidor"});
    }
}





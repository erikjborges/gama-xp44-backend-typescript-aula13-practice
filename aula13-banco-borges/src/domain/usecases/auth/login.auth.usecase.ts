import { ClientEntity } from "../../entities/clients/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

class LoginAuthUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(data: { user: string, pass: string }): Promise<{ client: ClientEntity | undefined, token: string } | undefined> {
        console.log(data);
        const client = await this._repository.readByUserPass(data.user, data.pass);

        if(client){
            const token = jwt.sign(client, String(process.env.SECRET_KEY), {
                expiresIn: '2 days',
            });

            return {
                client: client,
                token: token
            }
        }

        return;
    }
}

export default new LoginAuthUseCase(
    ClientsRepository
);
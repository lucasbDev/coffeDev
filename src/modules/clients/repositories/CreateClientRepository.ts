import { prisma } from "../../../database/prismaClient";
import ICreateClient from "../interfaces/ICreateClient";

export class CreateClientRepository {
    async execute({ password, username}: ICreateClient) {
        //validation: client exists
        const clientExists = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }
            }
        })

        if(!clientExists){
            throw new Error("client already exists")
        }
    }
}
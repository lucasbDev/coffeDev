import { prisma } from "../../../database/prismaClient";
import ICreateClient from "../interfaces/ICreateClient";
import { hash } from "bcrypt";

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

        if(clientExists){
            throw new Error("client already exists")
        }

        //criptografando a senha
        const hashPassword = await hash(password,10)

        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            },
        });

        return client;
        //salvando
    }
}
import { prisma } from "../../../database/prismaClient";
import IAuthenticateUseCase  from "../interfaces/IAuthenticateUseCase"
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthenticateClientUseCase {
    async execute ({ username, password }: IAuthenticateUseCase) {
        //recebe data //valida data
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if(!client) {
            throw new Error("username or password invalid!")
        }

        const pwdMatch = await compare(password, client.password) //comparando pwd

        if(!pwdMatch) {
            throw new Error("username or password invalid!")
        }

        const token = sign({username}, "5d584d9c23b48c286c980e013f2f69b6", {
            subject: client.id,
            expiresIn: "1d"
        }) //payload

        return token;
    }
}
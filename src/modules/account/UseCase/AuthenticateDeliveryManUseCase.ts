import { prisma } from "../../../database/prismaClient";
import IAuthenticateUseCase  from "../interfaces/IAuthenticateUseCase"
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthenticateDeliveryManUseCase {
    async execute ({ username, password }: IAuthenticateUseCase) {
        //recebe data //valida data
        const deliveryman = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if(!deliveryman) {
            throw new Error("username or password invalid!")
        }

        const pwdMatch = await compare(password, deliveryman.password) //comparando pwd

        if(!pwdMatch) {
            throw new Error("username or password invalid!")
        }

        const token = sign({username}, "5d584d9c23b48c255c980e013f2f69b6", {
            subject: deliveryman.id,
            expiresIn: "1d"
        }) //payload

        return token;
    }
}
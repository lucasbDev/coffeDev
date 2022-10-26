import { prisma } from "../../../database/prismaClient";
import ICreateClient from "../interfaces/ICreateDeliveryman";
import { hash } from "bcrypt";
import ICreateDeliveryman from "../interfaces/ICreateDeliveryman";

export class CreateDeliveryManRepository {
    async execute({ password, username}: ICreateDeliveryman) {
        //validation: Deliveryman exists
        const DeliverymanExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }
            }
        })

        if(DeliverymanExists){
            throw new Error("Deliveryman already exists")
        }

        //criptografando a senha
        const hashPassword = await hash(password,10)

        const Deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            },
        });

        return Deliveryman;
        //salvando
    }
}
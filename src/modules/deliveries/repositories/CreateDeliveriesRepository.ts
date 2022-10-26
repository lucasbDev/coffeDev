import { prisma } from "../../../database/prismaClient";
import ICreateDeliveries from "../interfaces/ICreateDeliveries";


export class CreateDeliveriesRepository {
    async execute({ item_name, id_client}: ICreateDeliveries) {
        const result = await prisma.deliveries.create({
            data: {
                item_name,
                id_client
            }
        })

        return result;
    }
}
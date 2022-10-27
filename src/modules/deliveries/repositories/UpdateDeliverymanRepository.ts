import { prisma } from "../../../database/prismaClient";
import IUpdateDeliveryman from "../interfaces/IUpdateDeliveryman";

export class UpdateDeliverymanRepository {
    async execute({ id_delivery, id_deliveryman}: IUpdateDeliveryman) {
        const result = await prisma.deliveries.update({
            where: {
                id: id_delivery
            },
            data: {
                id_deliveryman
                //alterou para o id entregador
            },
        });
        
        return result;
    }
}
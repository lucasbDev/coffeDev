import { prisma } from "../../../database/prismaClient";
import IUpdateDeliveryman from "../interfaces/IUpdateDeliveryman";

export class UpdateEndDateRepository {
    async execute({ id_delivery, id_deliveryman}: IUpdateDeliveryman) {
        const result = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery, id_deliveryman
            },
            data: {
                end_at: new Date()
                //alterou para o id entregador
            },
        });
        
        return result;
    }
}
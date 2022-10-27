import  { prisma } from "../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanRepository {
    async execute (id_delivery: string) { 
    const result = await prisma.clients.findMany({
        where: {
            id: id_delivery,
        },
        select: { //seleciona quais dados serão retornados
            Deliveries: true,
            id: true,
            username: true
        }

    })

    return result;

    }
} 
import  { prisma } from "../../../database/prismaClient";

export class FindAllDeliveriesRepository {
    async execute (id_client: string) { 
    const result = await prisma.clients.findMany({
        where: {
            id: id_client,
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
import { prisma } from "../../../database/prismaClient";



export class FindAllAvailibreRepository {
    async execute() {
        const result = await prisma.deliveries.findMany({
            where: {
                end_at: null
            }
        })

        return result;
    }
}
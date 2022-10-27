import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanRepository } from "../repositories/FindAllDeliveriesDeliveryman"; 
export class FindAllDeliveriesDeliveriesmanController {
    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request

        const findAllDeliveriesDeliverymanRepository = new FindAllDeliveriesDeliverymanRepository();
        const result = await findAllDeliveriesDeliverymanRepository.execute(id_deliveryman);

        return response.json(result).statusCode = 200
    }
}
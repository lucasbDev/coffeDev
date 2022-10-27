import { Request, Response } from "express";
import { FindAllDeliveriesRepository } from "../repositories/FindAllDeliveries"; 

export class FindAllDeliveriesController {
    async handle(request: Request, response: Response) {
        const { id_client } = request

        const findAllDeliveriesRepository = new FindAllDeliveriesRepository();
        const result = await findAllDeliveriesRepository.execute(id_client);

        return response.json(result).statusCode = 200
    }
}
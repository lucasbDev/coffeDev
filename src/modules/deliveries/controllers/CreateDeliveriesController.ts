import { Request, Response } from "express";
import { CreateDeliveriesRepository } from "../repositories/CreateDeliveriesRepository";

export class CreateDeliveriesController {
    async handle(request: Request, response: Response) {
        const { id_client, item_name } = request.body

        const createDeliveriesRepository = new CreateDeliveriesRepository();
        const result = await createDeliveriesRepository.execute({
            id_client,
            item_name,
        });

        return response.json(result).statusCode = 200
    }
}
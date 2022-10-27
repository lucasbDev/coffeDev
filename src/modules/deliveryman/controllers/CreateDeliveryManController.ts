import { Request, Response } from "express";
import { CreateDeliveryManRepository } from "../repositories/CreateDelivreryMan";

export class CreateDeliveryManController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body

        const createDeliveryManRepository = new CreateDeliveryManRepository();
        const result = await createDeliveryManRepository.execute({
            username,
            password,
        });

        return response.json(result).statusCode = 200
    }
}
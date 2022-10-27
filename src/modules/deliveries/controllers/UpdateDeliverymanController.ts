import { Request, Response } from "express";
import { UpdateDeliverymanRepository } from "../repositories/UpdateDeliverymanRepository";

export class UpdateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { id_deliveryman} = request
        const { id: id_delivery} = request.params

        const updateDeliverymanController = new UpdateDeliverymanRepository();
        const result = await updateDeliverymanController.execute({
            id_deliveryman,
            id_delivery,
        });
            return response.json(result).statusCode = 201
    }
}
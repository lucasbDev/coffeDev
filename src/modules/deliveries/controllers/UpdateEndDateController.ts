import { Request, Response } from "express";
import { UpdateEndDateRepository } from "../repositories/UpdateEndDate";

export class UpdateEndDateController {
    async handle(request: Request, response: Response) {
        const { id_deliveryman} = request
        const { id: id_delivery} = request.params

        const updateEndDateController = new UpdateEndDateRepository();
        const result = await updateEndDateController.execute({
            id_deliveryman,
            id_delivery,
        });
            return response.json(result).statusCode = 201
    }
}
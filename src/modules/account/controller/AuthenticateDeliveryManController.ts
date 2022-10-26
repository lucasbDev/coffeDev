import { Request, Response } from "express";
import { AuthenticateDeliveryManUseCase } from "../UseCase/AuthenticateDeliveryManUseCase";

export class AuthenticateDeliveryManController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body

        const authenticateDeliveryMantUseCase = new AuthenticateDeliveryManUseCase();
        const result = await authenticateDeliveryMantUseCase.execute({
            username,
            password,
        });

        return response.json(result).statusCode = 200
    }
}
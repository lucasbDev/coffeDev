import { Request, Response } from "express";
import { request } from "http";
import { CreateClientRepository } from "../repositories/CreateClientRepository";

export class CreateClientController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body

        const createClientRepository = new CreateClientRepository();
        const result = await createClientRepository.execute({
            username,
            password,
        });

        return response.json(result).statusCode = 200
    }
}
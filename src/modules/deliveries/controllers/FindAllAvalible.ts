import { Request, Response } from "express";
import { FindAllAvailibreRepository } from "../repositories/FindAllAvalible"; 

export class FindAllAvalibleController {
    async handle(request: Request, response: Response) {

        const findAllAvailibleRepository = new FindAllAvailibreRepository();
        const result = await findAllAvailibleRepository.execute();

        return response.json(result).statusCode = 200
    }
}
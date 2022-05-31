import { validate, validateOrReject, ValidationError } from "class-validator";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { validation } from "../../../../utils/validation";
import { CreateGameDTO } from "../../dtos/create-game.dto";
import { CreateGameUseCase } from "./CreateGameUseCases";

class CreateGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const createGameDTO = new CreateGameDTO();
    createGameDTO.title = title;

    await validation(createGameDTO);

    const createGameUseCase = container.resolve(CreateGameUseCase);

    await createGameUseCase.execute(createGameDTO);

    return response.status(201).send();
  }
}

export { CreateGameController };

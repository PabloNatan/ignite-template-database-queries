import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddGamesToUserUseCase } from "./AddGamesToUserUseCase";

class AddGamesToUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { games } = request.body;
    const { userId } = request.params;

    const addGamesToUserUseCase = container.resolve(AddGamesToUserUseCase);

    await addGamesToUserUseCase.execute({ games, userId });

    return response.status(200).send();
  }
}

export { AddGamesToUserController };

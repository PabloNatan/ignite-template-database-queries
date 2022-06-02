import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUsersByGameIdUseCase } from "./GetUserByGameIdUseCase";

class GetUsersByGameIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { gameId } = request.params;

    const getUsersByGameIdUseCase = container.resolve(GetUsersByGameIdUseCase);

    const users = await getUsersByGameIdUseCase.execute(gameId);

    return response.status(200).json(users);
  }
}

export { GetUsersByGameIdController };

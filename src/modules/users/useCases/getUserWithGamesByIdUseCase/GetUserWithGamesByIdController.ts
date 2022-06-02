import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetUserWithGamesByIdUseCase } from "./GetUsersWithGamesByIdUseCase";

class GetUserWithGamesByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const getUserWithGamesByIdUseCase = container.resolve(
      GetUserWithGamesByIdUseCase
    );

    const user = await getUserWithGamesByIdUseCase.execute(userId);

    return response.status(200).send(user);
  }
}

export { GetUserWithGamesByIdController };

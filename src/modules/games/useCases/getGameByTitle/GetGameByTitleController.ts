import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetGameByTitleUseCase } from "./GetGameByTitleUseCase";

class GetGameByTitleContrller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.query;

    const getGameByTitleUseCase = container.resolve(GetGameByTitleUseCase);

    const game = await getGameByTitleUseCase.execute(title as string);

    return response.status(200).json(game);
  }
}

export { GetGameByTitleContrller };

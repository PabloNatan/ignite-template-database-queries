import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetGamesUseCase } from "./getGamesUseCase";

class GetGamesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.query;
    const getGamesUseCase = container.resolve(GetGamesUseCase);
    const games = await getGamesUseCase.execute(String(title));

    return response.json(games);
  }
}
export { GetGamesController };

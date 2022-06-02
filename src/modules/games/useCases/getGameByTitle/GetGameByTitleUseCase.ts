import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class GetGameByTitleUseCase {
  constructor(
    @inject("GamesRepository")
    private readonly gamesRepository: IGamesRepository
  ) {}
  async execute(gameTitle: string): Promise<Game> {
    if (!gameTitle) {
      throw new AppError("Game title must provided");
    }

    const game = await this.gamesRepository.findByTitle(gameTitle);
    return game;
  }
}

export { GetGameByTitleUseCase };

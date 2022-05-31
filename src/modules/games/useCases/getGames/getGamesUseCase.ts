import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class GetGamesUseCase {
  constructor(
    @inject("GamesRepository")
    private readonly gamesRepository: IGamesRepository
  ) {}

  async execute(title = ""): Promise<Game[]> {
    const games = await this.gamesRepository.findByTitleContaining(title);
    return games;
  }
}

export { GetGamesUseCase };

import { inject, injectable } from "tsyringe";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class CountAllGamesUseCase {
  constructor(
    @inject("GamesRepository")
    private readonly gamesRepository: IGamesRepository
  ) {}

  async execute(): Promise<[{ count: string }]> {
    const gamesTotal = await this.gamesRepository.countAllGames();
    return gamesTotal;
  }
}

export { CountAllGamesUseCase };

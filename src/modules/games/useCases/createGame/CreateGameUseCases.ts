import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { CreateGameDTO } from "../../dtos/create-game.dto";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class CreateGameUseCase {
  constructor(
    @inject("GamesRepository")
    private gamesRepository: IGamesRepository
  ) {}

  async execute(params: CreateGameDTO): Promise<void> {
    const gameAlreadyExists = await this.gamesRepository.findByTitle(
      params.title
    );

    if (gameAlreadyExists) {
      throw new AppError("Game Already Exists");
    }

    await this.gamesRepository.create(params);
  }
}

export { CreateGameUseCase };

import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Game } from "../../../games/entities/Game";
import { IGamesRepository } from "../../../games/repositories/IGamesRepository";
import { AddGamesToUserDTO } from "../../dtos";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class AddGamesToUserUseCase {
  constructor(
    @inject("GamesRepository")
    private readonly gamesRepository: IGamesRepository,
    @inject("UsersRepository")
    private readonly usersRepository: IUsersRepository
  ) {}

  async execute({ games, userId }: AddGamesToUserDTO): Promise<void> {
    const validGames: Game[] = [];

    const gamesPromises = games.map(async (game) => {
      const gameExists = await this.gamesRepository.findByTitle(game);

      if (!gameExists) {
        throw new AppError(`Game: ${game} does not exists`);
      }

      validGames.push(gameExists);
    });

    await Promise.all(gamesPromises);

    await this.usersRepository.addGamesToUser({ games: validGames, userId });
  }
}

export { AddGamesToUserUseCase };

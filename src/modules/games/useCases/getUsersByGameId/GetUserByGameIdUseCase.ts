import { inject, injectable } from "tsyringe";
import { User } from "../../../users/entities/User";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class GetUsersByGameIdUseCase {
  constructor(
    @inject("GamesRepository")
    private readonly gamesRepository: IGamesRepository
  ) {}

  async execute(gameId: string): Promise<User[]> {
    const users = await this.gamesRepository.findUsersByGameId(gameId);
    return users;
  }
}

export { GetUsersByGameIdUseCase };

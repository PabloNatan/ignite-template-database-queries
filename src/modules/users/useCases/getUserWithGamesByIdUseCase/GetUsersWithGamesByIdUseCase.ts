import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class GetUserWithGamesByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private readonly usersRepository: IUsersRepository
  ) {}
  async execute(userId: string): Promise<any> {
    const user = await this.usersRepository.findUserWithGamesById({
      user_id: userId,
    });

    return user;
  }
}

export { GetUserWithGamesByIdUseCase };

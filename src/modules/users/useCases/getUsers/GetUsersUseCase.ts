import { inject, injectable } from "tsyringe";
import { IGamesRepository } from "../../../games/repositories/IGamesRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class GetUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private readonly usersRepository: IUsersRepository
  ) {}

  async execute() {
    const users = await this.usersRepository.findAllUsersOrderedByFirstName();
    return users;
  }
}

export { GetUsersUseCase };

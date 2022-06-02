import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { CreateUserDTO } from "../../dtos";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute(params: CreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(
      params.email
    );

    if (userAlreadyExists) {
      throw new AppError("User Already Exists", 400);
    }

    await this.userRepository.create(params);
  }
}

export { CreateUserUseCase };

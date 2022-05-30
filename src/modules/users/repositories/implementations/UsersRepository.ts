import { getRepository, Repository } from "typeorm";

import {
  IFindUserWithGamesDTO,
  IFindUserByFullNameDTO,
  CreateUserDTO,
} from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    // Complete usando ORM
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query(); // Complete usando raw query
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    return this.repository.query(); // Complete usando raw query
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email } });
    return user as User;
  }
  async create(params: CreateUserDTO): Promise<void> {
    const user = this.repository.create(params);
    await this.repository.save(user);
  }
}

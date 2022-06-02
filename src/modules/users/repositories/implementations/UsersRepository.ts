import { getRepository, Repository } from "typeorm";
import { Game } from "../../../games/entities/Game";

import {
  IFindUserWithGamesDTO,
  IFindUserByFullNameDTO,
  CreateUserDTO,
  AddGamesToUserDTO,
} from "../../dtos";
import { User } from "../../entities/User";
import { AddGamesToUserParams, IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    const user = await this.repository.findOneOrFail({
      where: { id: user_id },
      relations: ["games"],
    });

    return user;
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query("SELECT * FROM users ORDER BY first_name ASC");
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    const user = await this.repository.query(
      `SELECT * FROM users WHERE first_name ILIKE '%${first_name}%' AND last_name ILIKE '%${last_name}%' `
    );
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email } });
    return user as User;
  }

  async create(params: CreateUserDTO): Promise<void> {
    const user = this.repository.create(params);
    await this.repository.save(user);
  }

  async addGamesToUser({ games, userId }: AddGamesToUserParams): Promise<void> {
    const user = await this.repository.findOneOrFail({
      where: { id: userId },
      relations: ["games"],
    });

    user?.games.push(...games);

    await this.repository.save(user);
  }

  async findById(userId: string): Promise<User> {
    const user = await this.repository.findOneOrFail({ where: { id: userId } });
    return user;
  }
}

import { getRepository, Repository } from "typeorm";

import { User } from "../../../users/entities/User";
import { CreateGameDTO } from "../../dtos/create-game.dto";
import { Game } from "../../entities/Game";

import { IGamesRepository } from "../IGamesRepository";

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitle(title: string): Promise<Game | undefined> {
    const game = await this.repository.findOne({ where: { title } });
    return game;
  }

  async create(params: CreateGameDTO): Promise<void> {
    const game = this.repository.create(params);
    await this.repository.save(game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    const games = await this.repository
      .createQueryBuilder()
      .where("title like :title", { title: `%${param}%` })
      .getMany();
    return games;
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query(); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    return this.repository.createQueryBuilder();
    // Complete usando query builder
  }
}

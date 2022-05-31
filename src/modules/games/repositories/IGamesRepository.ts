import { User } from "../../users/entities/User";
import { CreateGameDTO } from "../dtos/create-game.dto";
import { Game } from "../entities/Game";

export interface IGamesRepository {
  findByTitleContaining(title: string): Promise<Game[]>;
  countAllGames(): Promise<[{ count: string }]>;
  findUsersByGameId(id: string): Promise<User[]>;
  create(params: CreateGameDTO): Promise<void>;
  findByTitle(name: string): Promise<Game | undefined>;
}

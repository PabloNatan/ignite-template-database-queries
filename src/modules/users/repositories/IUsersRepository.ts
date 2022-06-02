import { Game } from "../../games/entities/Game";
import {
  CreateUserDTO,
  IFindUserByFullNameDTO,
  IFindUserWithGamesDTO,
} from "../dtos";
import { User } from "../entities/User";

export type AddGamesToUserParams = {
  userId: string;
  games: Game[];
};

export interface IUsersRepository {
  findUserWithGamesById(data: IFindUserWithGamesDTO): Promise<User>;
  findAllUsersOrderedByFirstName(): Promise<User[]>;
  findUserByFullName(data: IFindUserByFullNameDTO): Promise<User[] | undefined>;
  findByEmail(email: string): Promise<User>;
  create(params: CreateUserDTO): Promise<void>;
  addGamesToUser(params: AddGamesToUserParams): Promise<void>;
  findById(userId: string): Promise<User>;
}

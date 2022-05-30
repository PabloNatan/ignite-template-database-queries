import {
  IFindUserWithGamesDTO,
  IFindUserByFullNameDTO,
  CreateUserDTO,
} from "../dtos";
import { User } from "../entities/User";

export interface IUsersRepository {
  findUserWithGamesById(data: IFindUserWithGamesDTO): Promise<User>;
  findAllUsersOrderedByFirstName(): Promise<User[]>;
  findUserByFullName(data: IFindUserByFullNameDTO): Promise<User[] | undefined>;
  findByEmail(email: string): Promise<User>;
  create(params: CreateUserDTO): Promise<void>;
}

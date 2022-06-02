import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";

interface IFindUserWithGamesDTO {
  user_id: string;
}

interface IFindUserByFullNameDTO {
  first_name: string;
  last_name: string;
}

class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

class AddGamesToUserDTO {
  @IsString()
  userId: string;

  @IsArray()
  games: string[];
}

export {
  IFindUserWithGamesDTO,
  IFindUserByFullNameDTO,
  CreateUserDTO,
  AddGamesToUserDTO,
};

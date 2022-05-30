interface IFindUserWithGamesDTO {
  user_id: string;
}

interface IFindUserByFullNameDTO {
  first_name: string;
  last_name: string;
}

interface CreateUserDTO {
  first_name: string;
  last_name: string;
  email: string;
}

export { IFindUserWithGamesDTO, IFindUserByFullNameDTO, CreateUserDTO };

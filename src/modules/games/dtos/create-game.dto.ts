import { IsNotEmpty, IsString } from "class-validator";

class CreateGameDTO {
  id?: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  created_at?: Date;

  updated_at?: Date;
}

export { CreateGameDTO };

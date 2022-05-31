import { Request, Response } from "express";
import { container } from "tsyringe";
import { validation } from "../../../../utils/validation";
import { CreateUserDTO } from "../../dtos";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, first_name, last_name } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const createUserDTO = new CreateUserDTO();
    createUserDTO.email = email;
    createUserDTO.first_name = first_name;
    createUserDTO.last_name = last_name;

    await validation(createUserDTO);

    await createUserUseCase.execute(createUserDTO);

    return response.status(201).send();
  }
}

export { CreateUserController };

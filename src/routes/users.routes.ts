import { Router } from "express";

import { AddGamesToUserController } from "../modules/users/useCases/addGamesToUserUseCase/AddGamesToUserController";
import { CreateUserController } from "../modules/users/useCases/createUserUseCase/CreateUserController";
import { GetUsersController } from "../modules/users/useCases/getUsers/GetUsersController";
import { GetUserWithGamesByIdController } from "../modules/users/useCases/getUserWithGamesByIdUseCase/GetUserWithGamesByIdController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getUsersController = new GetUsersController();
const addGamesToUserController = new AddGamesToUserController();
const getUserWithGamesByIdController = new GetUserWithGamesByIdController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", getUsersController.handle);
usersRoutes.get("/:userId", getUserWithGamesByIdController.handle);
usersRoutes.post("/addGames/:userId", addGamesToUserController.handle);

export { usersRoutes };

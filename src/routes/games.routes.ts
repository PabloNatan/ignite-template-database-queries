import { Router } from "express";
import { CreateGameController } from "../modules/games/useCases/CreateGameController";

const gamesRoutes = Router();

const createGameController = new CreateGameController();

gamesRoutes.post("/", createGameController.handle);

export { gamesRoutes };

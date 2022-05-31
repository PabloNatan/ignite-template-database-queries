import { Router } from "express";
import { CreateGameController } from "../modules/games/useCases/createGame/CreateGameController";
import { GetGamesController } from "../modules/games/useCases/getGames/getGamesController";

const gamesRoutes = Router();

const createGameController = new CreateGameController();
const getGamesController = new GetGamesController();

gamesRoutes.post("/", createGameController.handle);
gamesRoutes.get("/", getGamesController.handle);

export { gamesRoutes };

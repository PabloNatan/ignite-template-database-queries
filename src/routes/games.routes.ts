import { Router } from "express";
import { CountAllGamesController } from "../modules/games/useCases/countAllGames/CountAllGamesController";
import { CreateGameController } from "../modules/games/useCases/createGame/CreateGameController";
import { GetGameByTitleContrller } from "../modules/games/useCases/getGameByTitle/GetGameByTitleController";
import { GetGamesController } from "../modules/games/useCases/getGames/getGamesController";
import { GetUsersByGameIdController } from "../modules/games/useCases/getUsersByGameId/GetUserByGameIdController";

const gamesRoutes = Router();

const createGameController = new CreateGameController();
const getGamesController = new GetGamesController();
const getGameByTitleContrller = new GetGameByTitleContrller();
const countAllGamesController = new CountAllGamesController();
const getUsersByGameIdController = new GetUsersByGameIdController();

gamesRoutes.post("/", createGameController.handle);
gamesRoutes.get("/", getGamesController.handle);
gamesRoutes.get("/title", getGameByTitleContrller.handle);
gamesRoutes.get("/count", countAllGamesController.handle);
gamesRoutes.get("/users/:gameId", getUsersByGameIdController.handle);

export { gamesRoutes };

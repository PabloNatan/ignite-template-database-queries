import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import { router } from "./routes";

import "./database/data-source";
import "./shared/container";
import { AppError } from "./errors/AppError";
import { QueryFailedError } from "typeorm";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    if (err instanceof QueryFailedError) {
      console.log(err);
      let message = err.message;

      const matches = err?.query?.match(/SELECT "(\w+)"/);

      if (matches) {
        const entity = matches[1];
        message = `${entity} not found`;
      }
      return response.status(400).json({
        message: message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running"));

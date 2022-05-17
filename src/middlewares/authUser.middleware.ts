import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

export const userExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    const user = users.find((u) => u.id === req.params.id);

    if (!user) {
      return res.status(404).send({
        error: "UserNotFound",
        message: "User not found",
      });
    }

    next();
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

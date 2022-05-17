import { Request, Response } from "express";
import userDeleteService from "../services/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const user = await userDeleteService(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userDeleteController;

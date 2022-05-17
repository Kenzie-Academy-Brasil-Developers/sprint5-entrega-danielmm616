import { Request, Response } from "express";
import userUpdateService from "../services/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const user = await userUpdateService(req.body, req.params.id);

    res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;

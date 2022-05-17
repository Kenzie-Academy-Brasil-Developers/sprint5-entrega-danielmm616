import { Router } from "express";
import { userExistsMiddleware } from "../middlewares/authUser.middleware";

const routes = Router();

import userCreateController from "../controllers/userCreate.controller";
import userListController from "../controllers/userList.controller";
import userListOneController from "../controllers/userListOne.controller";
import userDeleteController from "../controllers/userDelete.controller";
import userUpdateController from "../controllers/userUpdate.controller";

routes.post("/users", userCreateController);

routes.get("/users", userListController);
routes.get("/users/:id", userExistsMiddleware, userListOneController);

routes.patch("/users/:id", userExistsMiddleware, userUpdateController);

routes.delete("/users/:id", userExistsMiddleware, userDeleteController);

export default routes;

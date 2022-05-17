import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import * as bcrypt from "bcrypt";
import { IUserUpdate } from "../interfaces/users";

const userUpdateService = async (body: IUserUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((u) => u.id === id);

  if (body.password) {
    if (bcrypt.compareSync(body.password, account!.password)) {
      throw new Error("Password is the same");
    }

    account!.password = bcrypt.hashSync(body.password, 10);
  }

  if (body.name) {
    account!.name = body.name;
  }

  if (body.email) {
    account!.email = body.email;
  }

  if (body.age) {
    account!.age = body.age;
  }

  account!.updatedAt = new Date();

  await userRepository.update(account!.id, account!);

  return account;
};

export default userUpdateService;

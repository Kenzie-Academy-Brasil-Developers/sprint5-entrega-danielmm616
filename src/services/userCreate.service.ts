import { User } from "../entities/user.entity";
import { IUserCreate } from "../interfaces/users";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";

const userCreateService = async (user: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const userExists = users.find((u) => u.email === user.email);

  if (userExists) {
    throw new Error("User already exists");
  }

  const newUser = new User();
  newUser.name = user.name;
  newUser.email = user.email;
  newUser.password = bcrypt.hashSync(user.password, 10);
  newUser.age = user.age;
  newUser.createdAt = new Date();
  newUser.updatedAt = new Date();

  userRepository.create(newUser);
  await userRepository.save(newUser);

  return newUser;
};

export default userCreateService;

import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userListOneService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const user = users.find((u) => u.id === id);

  return user;
};

export default userListOneService;

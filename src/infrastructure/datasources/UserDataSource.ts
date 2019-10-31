import UserRepository from '../../application/repository/UserRepository';
import { User } from '../../model/entities/User';
import { ulid } from 'ulid';

export default class UserDataSource implements UserRepository {
  async findUserById(id: string): Promise<User | null> {
    const user = await User.findOne({ id: id });
    return user || null;
  }

  async findUsers(): Promise<User[]> {
    return await User.find();
  }

  async createUser(name: string): Promise<User> {
    const newUser = new User();
    newUser.id = ulid();
    newUser.name = name;
    await User.save(newUser);
    return newUser;
  }
}

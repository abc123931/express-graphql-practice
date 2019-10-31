import { User } from '../../model/entities/User';
import UserRepository from '../../application/repository/UserRepository';
import UserUsecase from '../../application/usecase/UserUsecase';

export default class UserResolver {
  private readonly userUsecase: UserUsecase;

  constructor(userRepository: UserRepository) {
    this.userUsecase = new UserUsecase(userRepository);
  }

  async user(id: string): Promise<User | null> {
    return await this.userUsecase.getUser(id);
  }

  async users(): Promise<User[]> {
    return await this.userUsecase.getUsers();
  }

  async addUser(name: string): Promise<User> {
    return await this.userUsecase.createUser(name);
  }
}

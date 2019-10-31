import { User } from '../../model/entities/User';
import UserRepository from '../repository/UserRepository';

export default class UserUsecase {
  private readonly userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(id: string): Promise<User | null> {
    return this.userRepository.findUserById(id);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.findUsers();
  }

  async createUser(name: string): Promise<User> {
    return this.userRepository.createUser(name);
  }
}

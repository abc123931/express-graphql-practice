import { User } from '../../model/entities/User';

export default interface UserRepository {
  findUserById(id: string): Promise<User | null>;
  findUsers(): Promise<User[]>;
  createUser(name: string): Promise<User>;
}

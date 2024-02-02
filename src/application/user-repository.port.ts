import { User } from '../domain/user.entity';

export interface UserRepositoryPort {
  getAllUsers(): Promise<User[]>;
  getById(userId: string): Promise<User | null>;
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(userId: string): Promise<void>;
}
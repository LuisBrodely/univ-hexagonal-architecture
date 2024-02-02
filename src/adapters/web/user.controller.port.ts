import { User } from '../../domain/user.entity';

export interface UserControllerPort {
  getAllUsers(): Promise<User[]>;
  createUser(user: User): Promise<void>;
  updateUser(userId: string, user: User): Promise<void>;
  getUserById(userId: string): Promise<User | null>;
  deleteUser(userId: string): Promise<void>;
}
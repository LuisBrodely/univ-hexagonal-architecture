import { Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { UserRepositoryPort } from './user-repository.port';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  async createUser(user: User): Promise<void> {
    await this.userRepository.save(user);
  }

  async updateUser(userId: string, user: User): Promise<void> {
    const existingUser = await this.userRepository.getById(userId);
    if (!existingUser) {
      return;
    }

    existingUser.name = user.name;
    existingUser.email = user.email;

    await this.userRepository.update(existingUser);
  }

  async getUserById(userId: string): Promise<User | null> {
    return await this.userRepository.getById(userId);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }

  async deleteUser(userId: string): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
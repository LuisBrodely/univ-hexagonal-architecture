import { Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { User } from '../../domain/user.entity';
import { UserControllerPort } from './user.controller.port';
import { UserService } from '../../application/user.service';

@Controller('api/users')
export class UserController implements UserControllerPort {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(user: User): Promise<void> {
    return this.userService.createUser(user);
  }

  @Put(':user')
  async updateUser(@Param('user') userId: string, @Param() user: User): Promise<void> {
    return this.userService.updateUser(userId, user);
  }

  @Get(':user')
  async getUserById(@Param('user') userId: string): Promise<User | null> {
    return this.userService.getUserById(userId);
  }

  @Delete(':user')
  async deleteUser(@Param('user') userId: string): Promise<void> {
    return this.userService.deleteUser(userId);
  }
}
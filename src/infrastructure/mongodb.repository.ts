import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../domain/user.entity';
import { UserRepositoryPort } from '../application/user-repository.port';

@Injectable()
export class MongoDBRepository implements UserRepositoryPort {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getById(userId: string): Promise<User | null> {
    return this.userModel.findById(userId).exec();
  }

  async save(user: User): Promise<void> {
    const createdUser = new this.userModel(user);
    await createdUser.save();
  }

  async update(user: User): Promise<void> {
    await this.userModel.findByIdAndUpdate(user.id, user).exec();
  }

  async delete(userId: string): Promise<void> {
    await this.userModel.findByIdAndDelete(userId).exec();
  }
}
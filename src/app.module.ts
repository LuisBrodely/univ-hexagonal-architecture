import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './adapters/web/user.controller';
import { UserService } from './application/user.service';
import { MongoDBRepository } from './infrastructure/mongodb.repository';
import { UserSchema } from './domain/user.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs-hexagonal'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, MongoDBRepository],
})

export class AppModule {}

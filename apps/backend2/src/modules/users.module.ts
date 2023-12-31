import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/users.controller';
import { UserService } from '../services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
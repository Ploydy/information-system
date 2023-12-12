import { Module } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UsersController } from '../controllers/users.controller';
import { UsersRepository } from '../users/users.repository';
import { UserService } from '../services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [UserService, UsersRepository],
})
export class UsersModule {}





















/* 
import { Module } from "@nestjs/common";

import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { UsersService } from "./users.service";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UsersService, UsersRepository],
    controllers: [UsersController],
})
export class UsersModule {}
 */

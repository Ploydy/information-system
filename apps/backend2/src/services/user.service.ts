import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number | FindOneOptions<User>): Promise<User | undefined> {
    if (typeof id === 'number') {
      return this.userRepository.findOne(id as FindOneOptions<User>);
    } 
  }

  async update(id: number, updatedUser: User): Promise<User | undefined> {
    await this.userRepository.update(id, updatedUser);
    return this.userRepository.findOne(id as FindOneOptions<User>);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}




















/* 

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../schemas/user.schema';
 import { User } from '../entity/user.entity'; 

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private usermodel: mongoose.Model<User>
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.usermodel.find();
    return users;
  }

  async create(user: User): Promise<User> {
    const newUser = await this.usermodel.create(user);
    return newUser.save();
  }

  async findById(id: string): Promise<User> {
    const user = await this.usermodel.findById(id);

    if (!user) {
      throw new NotFoundException('User Not Found.');
    }
    return user;
  }

  async updateById(id: string, user: User): Promise<User> {
    return await this.usermodel.findByIdAndUpdate(id, user,{
      new: true,
      runValidators: true,
    });
  }


   async deleteById(id: string, user: User): Promise<User>{
    return await this.usermodel.findByIdAndDelete(id, user)
  } 
} 

*/

/* 

import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../users/dto/update-user.dto';

import { User } from '../schemas/user.schema';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ _id: userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(
    fullName: string,
    email: string,
    role: string,
    password: string
  ): Promise<User> {
    return this.usersRepository.create({
      fullName,
      email,
      role,
      password,
    });
  }

  async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersModel;
    return this.usersRepository.findBy({ id });
  }
} 

*/

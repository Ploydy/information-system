import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../schemas/user.schema';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private usermodel: mongoose.Model<User>,
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
    if (id.match(/^[0-9a-fA-F]{24}$/)){
      return user;
    }
  }

  async updateById(id: string, user: User): Promise<User> {
    if (id.match(/^[0-9a-fA-F]{24}$/)){
      return await this.usermodel.findByIdAndUpdate(id, user, {
        new: true,
        runValidators: true,
      });
    }
  }

  async deleteById(id: string, user: User): Promise<User> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return await this.usermodel.findByIdAndDelete(id, user);
    }
  }
}
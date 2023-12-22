import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Aluminum } from '../schemas/aluminum.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class AluminumService {
  constructor(
    @InjectModel(Aluminum.name)
    private aluminummodel: mongoose.Model<Aluminum>
  ) {}

  async findAll(): Promise<Aluminum[]> {
    const users = await this.aluminummodel.find();
    return users;
  }

  async create(aluminum: Aluminum): Promise<Aluminum> {
    const newUser = await this.aluminummodel.create(aluminum);
    return newUser.save();
  }

  async findById(id: string): Promise<Aluminum> {
    const user = await this.aluminummodel.findById(id);
    if (!user) {
      throw new NotFoundException('User Not Found.');
    }
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return user;
    }
  }

  async updateById(id: string, aluminum: Aluminum): Promise<Aluminum> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return await this.aluminummodel.findByIdAndUpdate(id, aluminum, {
        new: true,
        runValidators: true,
      });
    }
  }

  async deleteById(id: string, aluminum: Aluminum): Promise<Aluminum> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return await this.aluminummodel.findByIdAndDelete(id, aluminum);
    }
  }
}

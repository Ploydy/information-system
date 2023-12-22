import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Glass } from '../schemas/glass.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class GlassService {
  constructor(
    @InjectModel(Glass.name)
    private glassmodel: mongoose.Model<Glass>
  ) {}
  async findAll(): Promise<Glass[]> {
    const users = await this.glassmodel.find();
    return users;
  }

  async create(glass: Glass): Promise<Glass> {
    const newUser = await this.glassmodel.create(glass);
    return newUser.save();
  }

  async findById(id: string): Promise<Glass> {
    const user = await this.glassmodel.findById(id);
    if (!user) {
      throw new NotFoundException('User Not Found.');
    }
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return user;
    }
  }

  async updateById(id: string, glass: Glass): Promise<Glass> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return await this.glassmodel.findByIdAndUpdate(id, glass, {
        new: true,
        runValidators: true,
      });
    }
  }

  async deleteById(id: string, glass: Glass): Promise<Glass> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return await this.glassmodel.findByIdAndDelete(id, glass);
    }
  }
}

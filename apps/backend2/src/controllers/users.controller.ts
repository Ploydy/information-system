import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '@information-system/mylib';
import { User } from '../schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}


  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getUser(
    @Param('id')
    id: string
  ): Promise<User> {
    if (id.match(/^[0-9a-fA-F]{24}$/)){
      return this.userService.findById(id);
    }
  }

  @Post('new')
  async createUser(
    @Body()
    user: CreateUserDto
  ): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    user: UpdateUserDto
  ): Promise<User> {
    if (id.match(/^[0-9a-fA-F]{24}$/)){
      return this.userService.updateById(id, user);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string, user: User): Promise<User> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      try {
        return await this.userService.deleteById(id, user);
      } catch (error) {
        console.log(error);
        throw new Error('User deletion failed');
      }
    }
  }
}
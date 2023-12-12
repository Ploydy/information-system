import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatedUser: User): Promise<User> {
    return this.userService.update(+id, updatedUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(+id);
  }
}












/* 
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto, UpdateUserDto } from '@information-system/mylib';
import { User } from '../schemas/user.schema';
 import { User } from '../entity/user.entity'; 



@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {
  }
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('new')
  async createUser(
    @Body()
    user: CreateUserDto
  ): Promise<User> {
    return this.userService.create(user);
  }

  @Get(':id')
  async getUser(
    @Param('id')
    id: string
  ): Promise<User> {
    return this.userService.findById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    user: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateById(id, user);
  }


  @Delete(':id')
  async deleteUser(
    @Param('id') id: string, user: User,
  ): Promise<User> {
    try {
      return await this.userService.deleteById(id, user);
    } catch (error) {
      console.log(error);
      throw new Error('User deletion failed');
    }
  }
}

*/




/* 

/*   @Delete(':id')
  async deleteUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.userService.deleteById(id);
  } 

  @Delete(":id")
  async remove(@Param("id") ): Promise<User> {
    return await this.userService.deleteById(id);
  } */



/* 
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateUserDto } from '../users/dto/update-user.dto';

import { User } from '../schemas/user.schema';
import { UsersService } from '../services/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    console.log(userId);

    return this.usersService.getUserById(userId);
  }

  @Post('new')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(
      createUserDto.fullName,
      createUserDto.email,
      createUserDto.role,
      createUserDto.password
    );
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}



------------------------------------------------------------------------------------------------------

*/

/* 
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  
}
 */

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AluminumService } from '../services/aluminum.service';
import { Aluminum } from '../schemas/aluminum.schema';
import { CreateAluminumDto, UpdateAluminumDto } from '@information-system/mylib';

@Controller('aluminums')
export class AluminumController {
  constructor(private aluminumService: AluminumService) {}

  @Get()
  async getAllAluminum(): Promise<Aluminum[]> {
    return this.aluminumService.findAll();
  }

  @Get(':id')
  async getUser(
    @Param('id')
    id: string
  ): Promise<Aluminum> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return this.aluminumService.findById(id);
    }
  }

  @Post('new')
  async createUser(
    @Body()
    aluminum: CreateAluminumDto
  ): Promise<Aluminum> {
    return this.aluminumService.create(aluminum);
  }

  @Put(':id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    aluminum: UpdateAluminumDto
  ): Promise<Aluminum> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return this.aluminumService.updateById(id, aluminum);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string, aluminum: Aluminum): Promise<Aluminum> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      try {
        return await this.aluminumService.deleteById(id, aluminum);
      } catch (error) {
        console.log(error);
        throw new Error('User deletion failed');
      }
    }
  }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GlassService } from '../services/glass.service';
import { Glass } from '../schemas/glass.schema';
import { CreateGlassDto, UpdateGlassDto } from '@information-system/mylib';

@Controller('glass')
export class GlassController {
  constructor (private glassService: GlassService) {}

  @Get()
  async getAllGlass(): Promise<Glass[]> {
    return this.glassService.findAll();
  }

  @Get(':id')
  async getGlass(
    @Param('id')
    id: string
  ): Promise<Glass> {
    if (id.match(/^[0-9a-fA-F]{24}$/)){
      return this.glassService.findById(id);
    }
  }

  @Post('new')
  async createGlass(
    @Body()
    glass: CreateGlassDto
  ): Promise<Glass> {
    return this.glassService.create(glass);
  }

  @Put(':id')
  async updateGlass(
    @Param('id')
    id: string,
    @Body()
    glass: UpdateGlassDto
  ): Promise<Glass> {
    if (id.match(/^[0-9a-fA-F]{24}$/)){
      return this.glassService.updateById(id, glass);
    }
  }

  @Delete(':id')
  async deleteGlass(@Param('id') id: string, glass: Glass): Promise<Glass> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      try {
        return await this.glassService.deleteById(id, glass);
      } catch (error) {
        console.log(error);
        throw new Error('Glass deletion failed');
      }
    }
  }

}

import { Module } from '@nestjs/common';
import { AluminumController } from '../controllers/aluminum.controller';
import { AluminumService } from '../services/aluminum.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AluminumSchema } from '../schemas/aluminum.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Aluminum', schema: AluminumSchema }])],
  controllers: [AluminumController],
  providers: [AluminumService]
})
export class AluminumModule {}

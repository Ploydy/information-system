import { Module } from '@nestjs/common';
import { GlassController } from '../controllers/glass.controller';
import { GlassService } from '../services/glass.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GlassSchema } from '../schemas/glass.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Glass', schema: GlassSchema }])],
  controllers: [GlassController],
  providers: [GlassService]
})
export class GlassModule {}

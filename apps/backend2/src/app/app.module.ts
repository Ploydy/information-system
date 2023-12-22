import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../modules/users.module';
import { ProductsModule } from '../modules/products.module';
import { AluminumModule } from '../modules/aluminum.module';
import { GlassModule } from '../modules/glass.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/primeunilumDB'),
    UsersModule,
    ProductsModule,
    AluminumModule,
    GlassModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
